// ------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
// ------------------------------------------------------------------------------

export namespace BaseEmail {
    export const EmailRegex = `(([-a-zA-Z0-9_\\+\\.]+)@([-a-zA-Z\\d\\.]+)\\.([a-zA-Z\\.]{2,6}))`;
    export const IPv4Regex = `(?<ipv4>(\\d{1,3}\\.){3}\\d{1,3})`;
    export const NormalSuffixRegex = `(([0-9A-Za-z][-]*[0-9A-Za-z]*\\.)+(?<tld>[a-zA-Z][\\-a-zA-Z]{0,22}[a-zA-Z]))`;
    export const EmailPrefix = `(?(\"\")(\"\".+?(?<!\\\\)\"\")|(([0-9A-Za-z]((\\.(?!\\.))|[-!#\\$%&'\\*\\+/=\\?\\^\\{\\}\\|~\\w])*)(?<=[0-9A-Za-z])))`;
    export const EmailSuffix = `(?(\\[)(\\[${IPv4Regex}\\])|${NormalSuffixRegex})`;
    export const EmailRegex2 = `((${EmailPrefix})@(${EmailSuffix}))`;
}
