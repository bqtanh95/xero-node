"use strict";
/**
 * Accounting API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2.0.1
 * Contact: api@xero.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
class Currencies {
    static getAttributeTypeMap() {
        return Currencies.attributeTypeMap;
    }
}
exports.Currencies = Currencies;
Currencies.discriminator = undefined;
Currencies.attributeTypeMap = [
    {
        "name": "currencies",
        "baseName": "Currencies",
        "type": "Array<Currency>"
    }
];
//# sourceMappingURL=currencies.js.map