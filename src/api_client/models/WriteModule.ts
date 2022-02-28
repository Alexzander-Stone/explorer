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
    MoveModule,
    MoveModuleFromJSON,
    MoveModuleFromJSONTyped,
    MoveModuleToJSON,
} from './MoveModule';

/**
 * Write move module
 * @export
 * @interface WriteModule
 */
export interface WriteModule {
    /**
     * 
     * @type {string}
     * @memberof WriteModule
     */
    type: string;
    /**
     * Hex-encoded 16 bytes Diem account address.
     * 
     * Prefixed with `0x` and leading zeros are trimmed.
     * 
     * See [doc](https://diem.github.io/move/address.html) for more details.
     * @type {string}
     * @memberof WriteModule
     */
    address: string;
    /**
     * 
     * @type {MoveModule}
     * @memberof WriteModule
     */
    data: MoveModule;
}

export function WriteModuleFromJSON(json: any): WriteModule {
    return WriteModuleFromJSONTyped(json, false);
}

export function WriteModuleFromJSONTyped(json: any, ignoreDiscriminator: boolean): WriteModule {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'address': json['address'],
        'data': MoveModuleFromJSON(json['data']),
    };
}

export function WriteModuleToJSON(value?: WriteModule | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'address': value.address,
        'data': MoveModuleToJSON(value.data),
    };
}

