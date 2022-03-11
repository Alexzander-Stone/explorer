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
    TransactionPayload,
    TransactionPayloadFromJSON,
    TransactionPayloadFromJSONTyped,
    TransactionPayloadToJSON,
} from './TransactionPayload';

/**
 * 
 * @export
 * @interface UserTransactionRequest
 */
export interface UserTransactionRequest {
    /**
     * Hex-encoded 16 bytes Diem account address.
     * 
     * Prefixed with `0x` and leading zeros are trimmed.
     * 
     * See [doc](https://diem.github.io/move/address.html) for more details.
     * @type {string}
     * @memberof UserTransactionRequest
     */
    sender: string;
    /**
     * Unsiged int64 type value
     * @type {string}
     * @memberof UserTransactionRequest
     */
    sequenceNumber: string;
    /**
     * Unsiged int64 type value
     * @type {string}
     * @memberof UserTransactionRequest
     */
    maxGasAmount: string;
    /**
     * Unsiged int64 type value
     * @type {string}
     * @memberof UserTransactionRequest
     */
    gasUnitPrice: string;
    /**
     * 
     * @type {string}
     * @memberof UserTransactionRequest
     */
    gasCurrencyCode: string;
    /**
     * Timestamp in seconds, e.g. transaction expiration timestamp.
     * @type {string}
     * @memberof UserTransactionRequest
     */
    expirationTimestampSecs: string;
    /**
     * 
     * @type {TransactionPayload}
     * @memberof UserTransactionRequest
     */
    payload: TransactionPayload;
}

export function UserTransactionRequestFromJSON(json: any): UserTransactionRequest {
    return UserTransactionRequestFromJSONTyped(json, false);
}

export function UserTransactionRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): UserTransactionRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'sender': json['sender'],
        'sequenceNumber': json['sequence_number'],
        'maxGasAmount': json['max_gas_amount'],
        'gasUnitPrice': json['gas_unit_price'],
        'gasCurrencyCode': json['gas_currency_code'],
        'expirationTimestampSecs': json['expiration_timestamp_secs'],
        'payload': TransactionPayloadFromJSON(json['payload']),
    };
}

export function UserTransactionRequestToJSON(value?: UserTransactionRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'sender': value.sender,
        'sequence_number': value.sequenceNumber,
        'max_gas_amount': value.maxGasAmount,
        'gas_unit_price': value.gasUnitPrice,
        'gas_currency_code': value.gasCurrencyCode,
        'expiration_timestamp_secs': value.expirationTimestampSecs,
        'payload': TransactionPayloadToJSON(value.payload),
    };
}
