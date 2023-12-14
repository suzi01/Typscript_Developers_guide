/// <reference types="@types/google.maps" />

import { User } from "./user";
import { Company } from "./Company";
import { CustomMap } from "./CustomMap";

// const user = new User();
// const company = new Company();

// console.log(user);
// console.log(company);


const user = new User();
const user1 = new User();
// const company = new Company()
const customMap = new CustomMap("map");

customMap.addMarker(user);
// customMap.addMarker(company);
customMap.addMarker(user1);




