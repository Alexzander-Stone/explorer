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

import {
    ModuleBundlePayload,
    ModuleBundlePayloadFromJSON,
    ModuleBundlePayloadFromJSONTyped,
    ModuleBundlePayloadToJSON,
} from './ModuleBundlePayload';
import {
    ScriptFunctionPayload,
    ScriptFunctionPayloadFromJSON,
    ScriptFunctionPayloadFromJSONTyped,
    ScriptFunctionPayloadToJSON,
} from './ScriptFunctionPayload';
import {
    ScriptPayload,
    ScriptPayloadFromJSON,
    ScriptPayloadFromJSONTyped,
    ScriptPayloadToJSON,
} from './ScriptPayload';
import {
    WriteSetPayload,
    WriteSetPayloadFromJSON,
    WriteSetPayloadFromJSONTyped,
    WriteSetPayloadToJSON,
} from './WriteSetPayload';

/**
 * @type TransactionPayload
 * 
 * @export
 */
export type TransactionPayload = ModuleBundlePayload | ScriptFunctionPayload | ScriptPayload | WriteSetPayload;

export function TransactionPayloadFromJSON(json: any): TransactionPayload {
    return TransactionPayloadFromJSONTyped(json, false);
}

export function TransactionPayloadFromJSONTyped(json: any, ignoreDiscriminator: boolean): TransactionPayload {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return { ...ModuleBundlePayloadFromJSONTyped(json, true), ...ScriptFunctionPayloadFromJSONTyped(json, true), ...ScriptPayloadFromJSONTyped(json, true), ...WriteSetPayloadFromJSONTyped(json, true) };
}

export function TransactionPayloadToJSON(value?: TransactionPayload | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return { ...ModuleBundlePayloadToJSON(value), ...ScriptFunctionPayloadToJSON(value), ...ScriptPayloadToJSON(value), ...WriteSetPayloadToJSON(value) };
}

