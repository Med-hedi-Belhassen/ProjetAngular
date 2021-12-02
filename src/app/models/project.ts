import { Developer } from "./developer";

export class Project {
    idProj: number = 0;
    nomProj: string = "";
    lienProj: string = "";
    prixProj: number = 0;
    devloper: Developer = new Developer();
}
