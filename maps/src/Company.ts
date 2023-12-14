import { faker } from "@faker-js/faker";
import { isThisTypeNode } from "typescript";

export class Company {
    companyName:string;
    catchPhrase:string;
    location :{
        lat: number;
        lng: number;
    };

    constructor() {
        this.companyName = faker.company.name();
        this.catchPhrase = faker.company.catchPhrase();
        this.location = {
            lat: faker.location.longitude(),
            lng: faker.location.latitude(),
        }
    }

    markerContent():string{
        return `
        <div>
            <h1>Company Name: ${this.companyName}</h1>
            <h3>Company Catchphrase: ${this.catchPhrase}</h3>
        </div>
        `;
    }
}