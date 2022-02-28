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
    MoveScript,
    MoveScriptFromJSON,
    MoveScriptFromJSONTyped,
    MoveScriptToJSON,
} from './MoveScript';

/**
 * 
 * @export
 * @interface ScriptPayload
 */
export interface ScriptPayload {
    /**
     * 
     * @type {string}
     * @memberof ScriptPayload
     */
    type: string;
    /**
     * 
     * @type {MoveScript}
     * @memberof ScriptPayload
     */
    code: MoveScript;
    /**
     * 
     * @type {Array<string>}
     * @memberof ScriptPayload
     */
    typeArguments: Array<string>;
    /**
     * 
     * @type {Array<any>}
     * @memberof ScriptPayload
     */
    arguments: Array<any>;
}

export function ScriptPayloadFromJSON(json: any): ScriptPayload {
    return ScriptPayloadFromJSONTyped(json, false);
}

export function ScriptPayloadFromJSONTyped(json: any, ignoreDiscriminator: boolean): ScriptPayload {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'code': MoveScriptFromJSON(json['code']),
        'typeArguments': json['type_arguments'],
        'arguments': json['arguments'],
    };
}

export function ScriptPayloadToJSON(value?: ScriptPayload | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'code': MoveScriptToJSON(value.code),
        'type_arguments': value.typeArguments,
        'arguments': value.arguments,
    };
}

