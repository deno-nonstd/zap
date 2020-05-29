
import { parseYaml, readFileStr, writeFileStr } from "../deps.ts";
import { dotenv, parseCli } from "../deps.ts";
import { protocol as denoProtocol } from "../Protocols/denoProtocol.ts";


export class Zap {
  private _here: string;
  private _launchFile: string;
  private _options: any;
  private _protocolFile:string;
  private _protocol: any;
  private _command: any;
  private _whichApp: string;
  private _cliArgs: any;


  constructor(here?: string, whichApp?: string, launchFileName?: string) {
    this._here = here || Deno.cwd();
    this._launchFile = launchFileName || "launch.yaml";
    this._protocolFile = "Protocols/denoProtocol.yaml";
    this._whichApp = whichApp || "deno";
  }


  async loadConfig(path?: string, file?: string): Promise<void> {
    path = path || this.Here;
    file = file || this.LaunchFile;

    const toLoad = `${path}/${file}`;

    const yaml = await readFileStr(toLoad);
    this.Options = await parseYaml(yaml);

    return this.Options;
  }

  async loadProtocol(path?: string, file?: string): Promise<any> {
    path = path || this.Here;
    file = file || this.ProtocolFile;

    const toLoad = `${path}/${file}`;

    let it = false;
    if (it) {
      const yaml = await readFileStr(toLoad);
      this.Protocol = await parseYaml(yaml);
    }
    else {
      this.Protocol = denoProtocol;
    }
    return this.Protocol;
  }

  generateCommand(from: string): any {
    const config = this.Options;
    const proto = this.Protocol;
    let cmd = null;
    let has = false;
    let fileName = "";
    let envFile;


    // Level of script subs
    //
    let configs = this.getThisLevel(from, config[this.WhichApp][from]);
    let protos = this.getThisLevel(from, proto[this.WhichApp][from]);

    if(configs.length > 0 && this.hasSameNode(configs, protos)) {
      cmd = this.getNodeValue("format", protos);
      fileName = this.getNodeValue("main", configs);
    }

    // Get commandline args
    //
    let lineArgs = Deno.args;
    if (lineArgs) {
      this.CliArgs = parseCli(lineArgs);

      if (this.CliArgs["dotenv"]) {
        envFile = this.CliArgs["dotenv"];
        delete this.CliArgs["dotenv"];
      }
    }

    if (!envFile) {
      envFile = this.getNodeValue("dotenv", configs);
    }

    if (envFile) {
      let x = dotenv({path: `${Deno.cwd()}/${envFile}`, export: true});
    }

    // Level of OptionGroups
    //
    if (cmd) {
      let optionGroups = this.getOptionGroupsFromFormat(cmd);

      for (let [option] of optionGroups) {
        configs = this.getThisLevel(option, config[this.WhichApp][from][option]);
        protos = this.getThisLevel(option, proto[this.WhichApp][from][option]);

        let processed = this.processOptionGroup(configs, protos);
        cmd = cmd.replace(`[${option}]`, processed);
      }

      // Append fileName to command
      //
      cmd = cmd.replace("#main", fileName);
    }
    else {
      return undefined;
    }

    cmd = cmd.split(" ");
    cmd = cmd.filter((e:any) => { return e != null && e.trim() != "" });

    this.Command = cmd;
    return cmd;
  }

  async runCommand(): Promise<{ code: number}> {
    if (!this.Command) {
      throw Error("must generateCommand() first.");
    }

    let process = Deno.run({
      cmd: [
        ...this.Command
      ]
    });
    let { code } = await process.status();
    return { code };
  }

  private getThisLevel(which: string, node: any): any {
    let result: any[] = [];

    if (which !== "...args") {
      for (let [key, value] of Object.entries(node)) {
        result.push([key, value]);
      }
    }
    else {
      // TODO: Args pass-through
    }

    return result;
  }

  private hasSameNode(config: any, proto: any): boolean {
    return (config.length > 0 && proto.length > 0);
  }

  private getNodeValue(which: string, nodes: any): any {
    for (let node of nodes) {
      if (node[0] == which) {
        return node[1];
      }
    }

    return null;
  }

  private getSpecificNodeObject(which: string, nodes: any): any {
    for (let [key, value] of nodes) {
      if (key == which) {
        return [key, value];
      }
    }

    return null;
  }

  private getOptionGroupsFromFormat(format: string): any {
    return [...format.matchAll(     /(?<=\[).+?(?=\])/g     )];
  }

  private processOptionGroup(config: any, proto: any): string {
    let result = "";

    for (let [key, value] of config) {
      let inputAtom = [key, value];

      if (value) {
        let protoAtom = this.getSpecificNodeObject(key, proto);
        result += this.processAtom(inputAtom, protoAtom);
      }
    }

    return result;
  }

  private processAtom(fromInput: any, fromProto: any): string {
    let [ ...options ] = fromProto[1];
    let [key, values] = [fromInput[0], fromInput[1]];
    let result = options[0];

    if (options[1] === "array") {
      if (!Array.isArray(values)) {
        result += fromProto[0] + " ";
      }
      else {
        result += key + "=" + values.join(",");
      }
    }
    else {
      result += fromProto[0] + " ";
    }

    return result;
  }





  public async writeToJson(source?: string, destination?: string): Promise<void> {
    source = source || `${this.Here}/${this.LaunchFile}`;
    destination = destination || source.replace(".yaml", ".json");

    const yaml = await readFileStr(source);
    let json = await parseYaml(yaml);

    await writeFileStr(destination, JSON.stringify(json, null, 1));
  }

  public async writeToTs(source?: string, destination?: string): Promise<void> {
    source = source || `${this.Here}/${this.LaunchFile}`;
    destination = destination || source.replace(".yaml", ".ts");

    const yaml = await readFileStr(source);
    let json = await parseYaml(yaml);

    let ts = `let protocol = ${JSON.stringify(json, null, 1)} \nexport { protocol };`;

    await writeFileStr(destination, ts);
  }






  public set Here(path: string) {
    this._here = path;
  }

  public get Here(): string {
    return this._here;
  }

  public set LaunchFile(name: string) {
    this._launchFile = name;
  }

  public get LaunchFile() {
    return this._launchFile;
  }

  public set Options(json: any) {
    this._options = json;
  }

  public get Options(): any {
    return this._options;
  }

  public set ProtocolFile(name: string) {
    this._protocolFile = name;
  }

  public get ProtocolFile(): string {
    return this._protocolFile;
  }

  public set Protocol(json: any) {
    this._protocol = json;
  }

  public get Protocol(): any {
    return this._protocol;
  }

  public set Command(value: string) {
    this._command = value;
  }

  public get Command(): string {
    return this._command;
  }

  public set WhichApp(app: string) {
    this._whichApp = app;
  }

  public get WhichApp(): string {
    return this._whichApp;
  }

  public set CliArgs(value: any) {
    this._cliArgs = value;
  }

  public get CliArgs(): any {
    return this._cliArgs;
  }
}