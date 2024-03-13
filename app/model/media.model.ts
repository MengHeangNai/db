import { Model } from "@nozbe/watermelondb";
import { field } from "@nozbe/watermelondb/decorators";

export default class MediaDB extends Model {
    static table = 'media';
    @field('user_id') user_id : any;
    @field('username') username : any;
    @field('full_name') full_name : any;
    @field('email') email : any;
    @field('birthdate') birthdate : any;
    @field('location') location : any;
    @field('bio') bio : any;
    @field('followers_count') followers_count : any;
    @field('following_count') following_count : any;
    @field('profile_pic') profile_pic : any;
    @field('post_count') post_count : any;
    @field('last_post_date') last_post_date : any;
    @field('is_verified') is_verified : any;
    @field('interests') interests : any;
    @field('account_creation_date') account_creation_date : any;
}