﻿using System.Collections.Generic;
using System.Collections.Immutable;
using System.Globalization;
using System.Text.RegularExpressions;

using Microsoft.Recognizers.Definitions;
using Microsoft.Recognizers.Definitions.Italian;
using Microsoft.Recognizers.Text.Number.Italian;

namespace Microsoft.Recognizers.Text.NumberWithUnit.Italian
{
    public abstract class ItalianNumberWithUnitExtractorConfiguration : INumberWithUnitExtractorConfiguration
    {

        private const RegexOptions RegexFlags = RegexOptions.Singleline | RegexOptions.ExplicitCapture;

        private static readonly Regex CompoundUnitConnRegex =
            new Regex(NumbersWithUnitDefinitions.CompoundUnitConnectorRegex, RegexFlags);

        private static readonly Regex NonUnitsRegex =
            new Regex(BaseUnits.PmNonUnitRegex, RegexFlags);

        protected ItalianNumberWithUnitExtractorConfiguration(CultureInfo ci)
        {
            this.CultureInfo = ci;
            this.UnitNumExtractor = NumberExtractor.GetInstance();
            this.BuildPrefix = NumbersWithUnitDefinitions.BuildPrefix;
            this.BuildSuffix = NumbersWithUnitDefinitions.BuildSuffix;
            this.ConnectorToken = NumbersWithUnitDefinitions.ConnectorToken;
        }

        public abstract string ExtractType { get; }

        public CultureInfo CultureInfo { get; }

        public IExtractor UnitNumExtractor { get; }

        public string BuildPrefix { get; }

        public string BuildSuffix { get; }

        public string ConnectorToken { get; }

        public Regex CompoundUnitConnectorRegex => CompoundUnitConnRegex;

        public Regex NonUnitRegex => NonUnitsRegex;

        public virtual Regex AmbiguousUnitNumberMultiplierRegex => null;

        public Dictionary<Regex, Regex> AmbiguityFiltersDict { get; } = null;

        public abstract ImmutableDictionary<string, string> SuffixList { get; }

        public abstract ImmutableDictionary<string, string> PrefixList { get; }

        public abstract ImmutableList<string> AmbiguousUnitList { get; }
    }
}