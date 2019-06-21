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

import { BaseNumbers } from "./baseNumbers";
export namespace PortugueseNumeric {
    export const LangMarker = 'Por';
    export const CompoundNumberLanguage = false;
    export const MultiDecimalSeparatorCulture = false;
    export const HundredsNumberIntegerRegex = `(quatrocent[ao]s|trezent[ao]s|seiscent[ao]s|setecent[ao]s|oitocent[ao]s|novecent[ao]s|duzent[ao]s|quinhent[ao]s|cem|(?<!por\\s+)(cento))`;
    export const RoundNumberIntegerRegex = `(mil|milh[ãa]o|milh[õo]es|bilh[ãa]o|bilh[õo]es|trilh[ãa]o|trilh[õo]es|qua[td]rilh[ãa]o|qua[td]rilh[õo]es|quintilh[ãa]o|quintilh[õo]es)`;
    export const ZeroToNineIntegerRegex = `(quatro|cinco|sete|nove|zero|tr[êe]s|seis|oito|dois|duas|um|uma)`;
    export const TenToNineteenIntegerRegex = `(dez[ea]sseis|dez[ea]ssete|dez[ea]nove|dezoito|quatorze|catorze|quinze|treze|d[ée]z|onze|doze)`;
    export const TensNumberIntegerRegex = `(cinquenta|quarenta|trinta|sessenta|setenta|oitenta|noventa|vinte)`;
    export const DigitsNumberRegex = `\\d|\\d{1,3}(\\.\\d{3})`;
    export const BelowHundredsRegex = `((${TenToNineteenIntegerRegex}|(${TensNumberIntegerRegex}(\\s+e\\s+${ZeroToNineIntegerRegex})?))|${ZeroToNineIntegerRegex})`;
    export const BelowThousandsRegex = `(${HundredsNumberIntegerRegex}(\\s+e\\s+${BelowHundredsRegex})?|${BelowHundredsRegex})`;
    export const SupportThousandsRegex = `((${BelowThousandsRegex}|${BelowHundredsRegex})\\s+${RoundNumberIntegerRegex}(\\s+${RoundNumberIntegerRegex})?)`;
    export const NegativeNumberTermsRegex = `^[.]`;
    export const NegativeNumberSignRegex = `^(${NegativeNumberTermsRegex}\\s+).*`;
    export const SeparaIntRegex = `(${SupportThousandsRegex}(\\s+${SupportThousandsRegex})*(\\s+${BelowThousandsRegex})?|${BelowThousandsRegex})`;
    export const AllIntRegex = `(${SeparaIntRegex}|mil(\\s+${BelowThousandsRegex})?)`;
    export const AllPointRegex = `((\\s+${ZeroToNineIntegerRegex})+|(\\s+${AllIntRegex}))`;
    export const SpecialFractionInteger = `(((${AllIntRegex})i?(${ZeroToNineIntegerRegex})|(${AllIntRegex}))\\s+a?v[oa]s?)`;
    export const PlaceHolderDefault = `\\D|\\b`;
    export const PlaceHolderPureNumber = `\\b`;
    export const AllIntRegexWithLocks = `((?<=\\b)${AllIntRegex}(?=\\b))`;
    export const AllIntRegexWithDozenSuffixLocks = `(?<=\\b)(((meia)?\\s+(d[úu]zia))|(${AllIntRegex}\\s+(e|com)\\s+)?(${AllIntRegex}\\s+(d[úu]zia(s)?|dezena(s)?)))(?=\\b)`;
    export const NumbersWithPlaceHolder = (placeholder: string) => { return `(((?<!\\d+\\s*)-\\s*)|(?<=\\b))\\d+(?!(,\\d+[a-zA-Z]))(?=${placeholder})`; }
    export const NumbersWithSuffix = `(((?<=\\W|^)-\\s*)|(?<=\\b))\\d+\\s*${BaseNumbers.NumberMultiplierRegex}(?=\\b)`;
    export const RoundNumberIntegerRegexWithLocks = `(?<=\\b)(${DigitsNumberRegex})+\\s+${RoundNumberIntegerRegex}(?=\\b)`;
    export const NumbersWithDozenSuffix = `(((?<!\\d+\\s*)-\\s*)|(?<=\\b))\\d+\\s+dezena(s)?(?=\\b)`;
    export const NumbersWithDozen2Suffix = `(((?<=\\W|^)-\\s*)|(?<=\\b))\\d+\\s+d[úu]zia(s)(?=\\b)`;
    export const SimpleRoundOrdinalRegex = `(mil[eé]sim[oa]|milion[eé]sim[oa]|bilion[eé]sim[oa]|trilion[eé]sim[oa]|quatrilion[eé]sim[oa]|quintilion[eé]sim[oa])`;
    export const OneToNineOrdinalRegex = `(primeir[oa]|segund[oa]|terceir[oa]|quart[oa]|quint[oa]|sext[oa]|s[eé]tim[oa]|oitav[oa]|non[oa])`;
    export const TensOrdinalRegex = `(nonag[eé]sim[oa]|octog[eé]sim[oa]|setuag[eé]sim[oa]|septuag[eé]sim[oa]|sexag[eé]sim[oa]|quinquag[eé]sim[oa]|quadrag[eé]sim[oa]|trig[eé]sim[oa]|vig[eé]sim[oa]|d[eé]cim[oa])`;
    export const HundredOrdinalRegex = `(cent[eé]sim[oa]|ducent[eé]sim[oa]|tricent[eé]sim[oa]|cuadringent[eé]sim[oa]|quingent[eé]sim[oa]|sexcent[eé]sim[oa]|septingent[eé]sim[oa]|octingent[eé]sim[oa]|noningent[eé]sim[oa])`;
    export const SpecialUnderHundredOrdinalRegex = `(und[eé]cim[oa]|duod[eé]cimo)`;
    export const UnderHundredOrdinalRegex = `(((${TensOrdinalRegex}(\\s)?)?${OneToNineOrdinalRegex})|${TensOrdinalRegex}|${SpecialUnderHundredOrdinalRegex})`;
    export const UnderThousandOrdinalRegex = `(((${HundredOrdinalRegex}(\\s)?)?${UnderHundredOrdinalRegex})|${HundredOrdinalRegex})`;
    export const OverThousandOrdinalRegex = `((${AllIntRegex})([eé]sim[oa]))`;
    export const ComplexOrdinalRegex = `((${OverThousandOrdinalRegex}(\\s)?)?${UnderThousandOrdinalRegex}|${OverThousandOrdinalRegex})`;
    export const SuffixRoundOrdinalRegex = `((${AllIntRegex})(${SimpleRoundOrdinalRegex}))`;
    export const ComplexRoundOrdinalRegex = `(((${SuffixRoundOrdinalRegex}(\\s)?)?${ComplexOrdinalRegex})|${SuffixRoundOrdinalRegex})`;
    export const AllOrdinalRegex = `${ComplexOrdinalRegex}|${SimpleRoundOrdinalRegex}|${ComplexRoundOrdinalRegex}`;
    export const OrdinalSuffixRegex = `(?<=\\b)(\\d*(1[oaº]|2[oaº]|3[oaº]|4[oaº]|5[oaº]|6[oaº]|7[oaº]|8[oaº]|9[oaº]|0[oaº]|1.º|2.º|3.º|4.º|5.º|6.º|7.º|8.º|9.º))(?=\\b)`;
    export const OrdinalEnglishRegex = `(?<=\\b)${AllOrdinalRegex}(?=\\b)`;
    export const FractionNotationRegex = `(((?<=\\W|^)-\\s*)|(?<=\\b))\\d+[/]\\d+(?=(\\b[^/]|$))`;
    export const FractionNotationWithSpacesRegex = `(((?<=\\W|^)-\\s*)|(?<=\\b))\\d+\\s+\\d+[/]\\d+(?=(\\b[^/]|$))`;
    export const FractionNounRegex = `(?<=\\b)(${AllIntRegex}\\s+((e|com)\\s+)?)?(${AllIntRegex})(\\s+((e|com)\\s)?)(((${AllOrdinalRegex})s?|(${SpecialFractionInteger})|(${SuffixRoundOrdinalRegex})s?)|mei[oa]?|ter[çc]o?)(?=\\b)`;
    export const FractionNounWithArticleRegex = `(?<=\\b)(${AllIntRegex}\\s+(e\\s+)?)?(um|um[as])(\\s+)((${AllOrdinalRegex})|(${SuffixRoundOrdinalRegex})|(e\\s+)?mei[oa]?)(?=\\b)`;
    export const FractionPrepositionRegex = `(?<=\\b)(?<numerator>(${AllIntRegex})|((?<!\\.)\\d+))\\s+sobre\\s+(?<denominator>(${AllIntRegex})|((\\d+)(?!\\.)))(?=\\b)`;
    export const AllFloatRegex = `${AllIntRegex}(\\s+(vírgula|virgula|e|ponto))${AllPointRegex}`;
    export const DoubleWithMultiplierRegex = `(((?<!\\d+\\s*)-\\s*)|((?<=\\b)(?<!\\d+\\,)))\\d+,\\d+\\s*${BaseNumbers.NumberMultiplierRegex}(?=\\b)`;
    export const DoubleExponentialNotationRegex = `(((?<!\\d+\\s*)-\\s*)|((?<=\\b)(?<!\\d+,)))(\\d+(,\\d+)?)e([+-]*[1-9]\\d*)(?=\\b)`;
    export const DoubleCaretExponentialNotationRegex = `(((?<!\\d+\\s*)-\\s*)|((?<=\\b)(?<!\\d+,)))(\\d+(,\\d+)?)\\^([+-]*[1-9]\\d*)(?=\\b)`;
    export const DoubleDecimalPointRegex = (placeholder: string) => { return `(((?<!\\d+\\s*)-\\s*)|((?<=\\b)(?<!\\d+,)))\\d+,\\d+(?!(,\\d+))(?=${placeholder})`; }
    export const DoubleWithoutIntegralRegex = (placeholder: string) => { return `(?<=\\s|^)(?<!(\\d+)),\\d+(?!(,\\d+))(?=${placeholder})`; }
    export const DoubleWithRoundNumber = `(((?<!\\d+\\s*)-\\s*)|((?<=\\b)(?<!\\d+\\,)))\\d+,\\d+\\s+${RoundNumberIntegerRegex}(?=\\b)`;
    export const DoubleAllFloatRegex = `((?<=\\b)${AllFloatRegex}(?=\\b))`;
    export const NumberWithSuffixPercentage = `(?<!%)(${BaseNumbers.NumberReplaceToken})(\\s*)(%(?!${BaseNumbers.NumberReplaceToken})|(por cento|pontos percentuais)\\b)`;
    export const AmbiguousFractionConnectorsRegex = `^[.]`;
    export const DecimalSeparatorChar = ',';
    export const FractionMarkerToken = 'sobre';
    export const NonDecimalSeparatorChar = '.';
    export const HalfADozenText = 'seis';
    export const WordSeparatorToken = 'e';
    export const WrittenDecimalSeparatorTexts = [ "virgula","vírgula" ];
    export const WrittenGroupSeparatorTexts = [ "ponto" ];
    export const WrittenIntegerSeparatorTexts = [ "e" ];
    export const WrittenFractionSeparatorTexts = [ "com" ];
    export const WrittenFractionSuffix = [ "avo","ava" ];
    export const PluralSuffix = 's';
    export const HalfADozenRegex = `meia\\s+d[uú]zia`;
    export const DigitalNumberRegex = `((?<=\\b)(mil|cem|milh[oõ]es|milh[aã]o|bilh[oõ]es|bilh[aã]o|trilh[oõ]es|trilh[aã]o|milhares|centena|centenas|dezena|dezenas?)(?=\\b))|((?<=(\\d|\\b))${BaseNumbers.MultiplierLookupRegex}(?=\\b))`;
    export const CardinalNumberMap: ReadonlyMap<string, number> = new Map<string, number>([["zero", 0],["hum", 1],["um", 1],["uma", 1],["dois", 2],["duas", 2],["meia", 2],["meio", 2],["tres", 3],["três", 3],["quatro", 4],["cinco", 5],["seis", 6],["sete", 7],["oito", 8],["nove", 9],["dez", 10],["dezena", 10],["déz", 10],["onze", 11],["doze", 12],["dúzia", 12],["duzia", 12],["dúzias", 12],["duzias", 12],["treze", 13],["catorze", 14],["quatorze", 14],["quinze", 15],["dezesseis", 16],["dezasseis", 16],["dezessete", 17],["dezassete", 17],["dezoito", 18],["dezenove", 19],["dezanove", 19],["vinte", 20],["trinta", 30],["quarenta", 40],["cinquenta", 50],["cincoenta", 50],["sessenta", 60],["setenta", 70],["oitenta", 80],["noventa", 90],["cem", 100],["cento", 100],["duzentos", 200],["duzentas", 200],["trezentos", 300],["trezentas", 300],["quatrocentos", 400],["quatrocentas", 400],["quinhentos", 500],["quinhentas", 500],["seiscentos", 600],["seiscentas", 600],["setecentos", 700],["setecentas", 700],["oitocentos", 800],["oitocentas", 800],["novecentos", 900],["novecentas", 900],["mil", 1000],["milhão", 1000000],["milhao", 1000000],["milhões", 1000000],["milhoes", 1000000],["bilhão", 1000000000],["bilhao", 1000000000],["bilhões", 1000000000],["bilhoes", 1000000000],["trilhão", 1000000000000],["trilhao", 1000000000000],["trilhões", 1000000000000],["trilhoes", 1000000000000]]);
    export const OrdinalNumberMap: ReadonlyMap<string, number> = new Map<string, number>([["primeiro", 1],["primeira", 1],["segundo", 2],["segunda", 2],["terceiro", 3],["terceira", 3],["quarto", 4],["quarta", 4],["quinto", 5],["quinta", 5],["sexto", 6],["sexta", 6],["sétimo", 7],["setimo", 7],["sétima", 7],["setima", 7],["oitavo", 8],["oitava", 8],["nono", 9],["nona", 9],["décimo", 10],["decimo", 10],["décima", 10],["decima", 10],["undécimo", 11],["undecimo", 11],["undécima", 11],["undecima", 11],["duodécimo", 11],["duodecimo", 11],["duodécima", 11],["duodecima", 11],["vigésimo", 20],["vigesimo", 20],["vigésima", 20],["vigesima", 20],["trigésimo", 30],["trigesimo", 30],["trigésima", 30],["trigesima", 30],["quadragésimo", 40],["quadragesimo", 40],["quadragésima", 40],["quadragesima", 40],["quinquagésimo", 50],["quinquagesimo", 50],["quinquagésima", 50],["quinquagesima", 50],["sexagésimo", 60],["sexagesimo", 60],["sexagésima", 60],["sexagesima", 60],["septuagésimo", 70],["septuagesimo", 70],["septuagésima", 70],["septuagesima", 70],["setuagésimo", 70],["setuagesimo", 70],["setuagésima", 70],["setuagesima", 70],["octogésimo", 80],["octogesimo", 80],["octogésima", 80],["octogesima", 80],["nonagésimo", 90],["nonagesimo", 90],["nonagésima", 90],["nonagesima", 90],["centesimo", 100],["centésimo", 100],["centesima", 100],["centésima", 100],["ducentésimo", 200],["ducentesimo", 200],["ducentésima", 200],["ducentesima", 200],["tricentésimo", 300],["tricentesimo", 300],["tricentésima", 300],["tricentesima", 300],["trecentésimo", 300],["trecentesimo", 300],["trecentésima", 300],["trecentesima", 300],["quadringentésimo", 400],["quadringentesimo", 400],["quadringentésima", 400],["quadringentesima", 400],["quingentésimo", 500],["quingentesimo", 500],["quingentésima", 500],["quingentesima", 500],["sexcentésimo", 600],["sexcentesimo", 600],["sexcentésima", 600],["sexcentesima", 600],["seiscentésimo", 600],["seiscentesimo", 600],["seiscentésima", 600],["seiscentesima", 600],["septingentésimo", 700],["septingentesimo", 700],["septingentésima", 700],["septingentesima", 700],["setingentésimo", 700],["setingentesimo", 700],["setingentésima", 700],["setingentesima", 700],["octingentésimo", 800],["octingentesimo", 800],["octingentésima", 800],["octingentesima", 800],["noningentésimo", 900],["noningentesimo", 900],["noningentésima", 900],["noningentesima", 900],["nongentésimo", 900],["nongentesimo", 900],["nongentésima", 900],["nongentesima", 900],["milésimo", 1000],["milesimo", 1000],["milésima", 1000],["milesima", 1000],["milionésimo", 1000000],["milionesimo", 1000000],["milionésima", 1000000],["milionesima", 1000000],["bilionésimo", 1000000000],["bilionesimo", 1000000000],["bilionésima", 1000000000],["bilionesima", 1000000000]]);
    export const PrefixCardinalMap: ReadonlyMap<string, number> = new Map<string, number>([["hum", 1],["dois", 2],["tres", 3],["três", 3],["quatro", 4],["cinco", 5],["seis", 6],["sete", 7],["oito", 8],["nove", 9],["dez", 10],["onze", 11],["doze", 12],["treze", 13],["catorze", 14],["quatorze", 14],["quinze", 15],["dezesseis", 16],["dezasseis", 16],["dezessete", 17],["dezassete", 17],["dezoito", 18],["dezenove", 19],["dezanove", 19],["vinte", 20],["trinta", 30],["quarenta", 40],["cinquenta", 50],["cincoenta", 50],["sessenta", 60],["setenta", 70],["oitenta", 80],["noventa", 90],["cem", 100],["duzentos", 200],["trezentos", 300],["quatrocentos", 400],["quinhentos", 500],["seiscentos", 600],["setecentos", 700],["oitocentos", 800],["novecentos", 900]]);
    export const SuffixOrdinalMap: ReadonlyMap<string, number> = new Map<string, number>([["milesimo", 1000],["milionesimo", 1000000],["bilionesimo", 1000000000],["trilionesimo", 1000000000000]]);
    export const RoundNumberMap: ReadonlyMap<string, number> = new Map<string, number>([["mil", 1000],["milesimo", 1000],["milhão", 1000000],["milhao", 1000000],["milhões", 1000000],["milhoes", 1000000],["milionésimo", 1000000],["milionesimo", 1000000],["bilhão", 1000000000],["bilhao", 1000000000],["bilhões", 1000000000],["bilhoes", 1000000000],["bilionésimo", 1000000000],["bilionesimo", 1000000000],["trilhão", 1000000000000],["trilhao", 1000000000000],["trilhões", 1000000000000],["trilhoes", 1000000000000],["trilionésimo", 1000000000000],["trilionesimo", 1000000000000],["dezena", 10],["dezenas", 10],["dúzia", 12],["duzia", 12],["dúzias", 12],["duzias", 12],["k", 1000],["m", 1000000],["g", 1000000000],["b", 1000000000],["t", 1000000000000]]);
    export const RelativeReferenceOffsetMap: ReadonlyMap<string, string> = new Map<string, string>([["", ""]]);
    export const RelativeReferenceRelativeToMap: ReadonlyMap<string, string> = new Map<string, string>([["", ""]]);
}
