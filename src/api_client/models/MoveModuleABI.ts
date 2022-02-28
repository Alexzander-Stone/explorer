/* tslint:disable */
/* eslint-disable */
// @ts-nocheck
/**
 * Diem Dev API Specification
 * Diem Dev API is REST API for client applications to interact the Diem blockchain. 
 *
 * The version of the OpenAPI document: 0.1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    MoveFunction,
    MoveFunctionFromJSON,
    MoveFunctionFromJSONTyped,
    MoveFunctionToJSON,
} from './MoveFunction';
import {
    MoveStruct,
    MoveStructFromJSON,
    MoveStructFromJSONTyped,
    MoveStructToJSON,
} from './MoveStruct';

/**
 * Move Module ABI is JSON representation of Move module binary interface.
 * @export
 * @interface MoveModuleABI
 */
export interface MoveModuleABI {
    /**
     * Hex-encoded 16 bytes Diem account address.
     * 
     * Prefixed with `0x` and leading zeros are trimmed.
     * 
     * See [doc](https://diem.github.io/move/address.html) for more details.
     * @type {string}
     * @memberof MoveModuleABI
     */
    address: string;
    /**
     * 
     * @type {string}
     * @memberof MoveModuleABI
     */
    name: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof MoveModuleABI
     */
    friends: Array<string>;
    /**
     * 
     * @type {Array<MoveFunction>}
     * @memberof MoveModuleABI
     */
    exposedFunctions: Array<MoveFunction>;
    /**
     * 
     * @type {Array<MoveStruct>}
     * @memberof MoveModuleABI
     */
    structs: Array<MoveStruct>;
}

export function MoveModuleABIFromJSON(json: any): MoveModuleABI {
    return MoveModuleABIFromJSONTyped(json, false);
}

export function MoveModuleABIFromJSONTyped(json: any, ignoreDiscriminator: boolean): MoveModuleABI {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'address': json['address'],
        'name': json['name'],
        'friends': json['friends'],
        'exposedFunctions': ((json['exposed_functions'] as Array<any> || []).map(MoveFunctionFromJSON)),
        'structs': ((json['structs'] as Array<any> || []).map(MoveStructFromJSON)),
    };
}

export function MoveModuleABIToJSON(value?: MoveModuleABI | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'address': value.address,
        'name': value.name,
        'friends': value.friends,
        'exposed_functions': ((value.exposedFunctions as Array<any> || []).map(MoveFunctionToJSON)),
        'structs': ((value.structs as Array<any> || []).map(MoveStructToJSON)),
    };
}

