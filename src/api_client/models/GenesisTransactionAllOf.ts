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
    Event,
    EventFromJSON,
    EventFromJSONTyped,
    EventToJSON,
} from './Event';
import {
    WriteSetPayload,
    WriteSetPayloadFromJSON,
    WriteSetPayloadFromJSONTyped,
    WriteSetPayloadToJSON,
} from './WriteSetPayload';

/**
 * 
 * @export
 * @interface GenesisTransactionAllOf
 */
export interface GenesisTransactionAllOf {
    /**
     * 
     * @type {string}
     * @memberof GenesisTransactionAllOf
     */
    type: string;
    /**
     * 
     * @type {Array<Event>}
     * @memberof GenesisTransactionAllOf
     */
    events: Array<Event>;
    /**
     * 
     * @type {WriteSetPayload}
     * @memberof GenesisTransactionAllOf
     */
    payload: WriteSetPayload;
}

export function GenesisTransactionAllOfFromJSON(json: any): GenesisTransactionAllOf {
    return GenesisTransactionAllOfFromJSONTyped(json, false);
}

export function GenesisTransactionAllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): GenesisTransactionAllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'events': ((json['events'] as Array<any> || []).map(EventFromJSON)),
        'payload': WriteSetPayloadFromJSON(json['payload']),
    };
}

export function GenesisTransactionAllOfToJSON(value?: GenesisTransactionAllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'events': ((value.events as Array<any> || []).map(EventToJSON)),
        'payload': WriteSetPayloadToJSON(value.payload),
    };
}
