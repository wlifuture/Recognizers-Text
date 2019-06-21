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

import { BaseIp } from "./baseIp";
export namespace BaseURL {
    export const ProtocolRegex = `((https?|ftp):\\/\\/)`;
    export const PortRegex = `(:\\d{1,5})`;
    export const ExtractionRestrictionRegex = `(?<=\\s|[\\'\"\"\\(\\[:]|^)`;
    export const UrlPrefixRegex = `(${ExtractionRestrictionRegex}${ProtocolRegex}?|${ProtocolRegex})[a-zA-Z0-9][-a-zA-Z0-9._]{0,256}(?<![.])\\.`;
    export const UrlSuffixRegex = `${PortRegex}?([/#][-a-zA-Z0-9:%_\\+.~#?!&//=]*)?(?![-a-zA-Z0-9:%_\\+~#?!&//=@])`;
    export const UrlRegex = `${UrlPrefixRegex}(?<Tld>[a-zA-Z]{2,18})${UrlSuffixRegex}`;
    export const UrlRegex2 = `((ht|f)tp(s?)\\:\\/\\/|www\\.)[0-9a-zA-Z]([-.\\w]*[0-9a-zA-Z])*(\\.(?<Tld>[0-9a-zA-Z]+))+(:(0-9)*)*(\\/?)([a-zA-Z0-9\\-\\.\\?\\,\\'\\/\\\\\\+&amp;%\\$#_=@]*)?`;
    export const IpUrlRegex = `(?<IPurl>(${ExtractionRestrictionRegex}${ProtocolRegex}(${BaseIp.Ipv4Regex}|localhost)${UrlSuffixRegex}))`;
    export const AmbiguousTimeTerm = `^(1?[0-9]|2[0-3]).[ap]m$`;
    export const TldList = [ "com","org","net","int","edu","gov","mil","academy","app","aws","bot","buy","cafe","city","cloud","company","eco","education","game","games","gmbh","law","limited","live","llc","ltd","ltda","map","med","news","ngo","ong","phd","place","radio","science","search","shopping","sport","store","tvs","wiki","work","ac","ad","ae","af","ag","ai","al","am","an","ao","aq","ar","as","at","au","aw","ax","az","ba","bb","bd","be","bf","bg","bh","bi","bj","bl","bm","bn","bo","bq","br","bs","bt","bv","bw","by","bz","ca","cc","cd","cf","cg","ch","ci","ck","cl","cm","cn","co","cr","cu","cv","cw","cx","cy","cz","de","dj","dk","dm","do","dz","ec","ee","eg","eh","er","es","et","eu","fi","fj","fk","fm","fo","fr","ga","gb","gd","ge","gf","gg","gh","gi","gl","gm","gn","gp","gq","gr","gs","gt","gu","gw","gy","hk","hm","hn","hr","ht","hu","id","ie","il","im","in","io","iq","ir","is","it","je","jm","jo","jp","ke","kg","kh","ki","km","kn","kp","kr","kw","ky","kz","la","lb","lc","li","lk","lr","ls","lt","lu","lv","ly","ma","mc","md","me","mf","mg","mh","mk","ml","mm","mn","mo","mp","mq","mr","ms","mt","mu","mv","mw","mx","my","mz","na","nc","ne","nf","ng","ni","nl","no","np","nr","nu","nz","om","pa","pe","pf","pg","ph","pk","pl","pm","pn","pr","ps","pt","pw","py","qa","re","ro","rs","ru","rw","sa","sb","sc","sd","se","sg","sh","si","sj","sk","sl","sm","sn","so","sr","ss","st","su","sv","sx","sy","sz","tc","td","tf","tg","th","tj","tk","tl","tm","tn","to","tp","tr","tt","tv","tw","tz","ua","ug","uk","um","us","uy","uz","va","vc","ve","vg","vi","vn","vu","wf","ws","ye","yt","za","zm","zw" ];
}
