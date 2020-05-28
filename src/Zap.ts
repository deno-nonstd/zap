
import {parseYaml, readFileStr} from "../deps.ts";


export class Zap {
  private _here: string;
  private _launchFile: string;
  private _options: any;
  private _protocolFile:string;
  private _protocol: any;


  constructor(here?: string, launchFileName?: string) {
    this._here = here || Deno.cwd();
    this._launchFile = launchFileName || "launch.yaml";
    this._protocolFile = "launch-template.yaml";
  }


  async loadConfig(path?: string, file?: string): Promise<void> {
    path = path || this.Here;
    file = file || this.LaunchFile;

    const toLoad = `${path}/${file}`;

    console.log(`About to load file: ${toLoad}`);

    const yaml = await readFileStr(toLoad);
    this.Options = await parseYaml(yaml);

    return this.Options;
  }

  async loadProtocol(path?: string, file?: string): Promise<any> {
    path = path || this.Here;
    file = file || this.ProtocolFile;

    const toLoad = `${path}/${file}`;
    console.log(`About to load protocol: ${toLoad}`);

    const yaml = await readFileStr(toLoad);
    this.Protocol = await parseYaml(yaml);

    return this.Protocol;
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
}