import {JModel} from "./Inra/jmodel"
export class Hero implements JModel{

  constructor(public id:number,
              public  name: string,
              public isFavorite?:boolean,
              public  power?:string,
              public  alterEgo?:string)
  {}
}