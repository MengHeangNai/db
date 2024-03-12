import { Model } from "@nozbe/watermelondb";
import { field } from "@nozbe/watermelondb/decorators";

export default class InfoDB extends Model {
    static table = 'info';
    @field('first_name') first_name: any;
    @field('last_name') last_name: any;
    @field('age') age: any;
    @field('email') email: any;
    @field('gender') gender : any;
    @field('address') address: any;
    @field('phone_number') phone_number: any;
    @field('birthdate') birthdate: any;
}