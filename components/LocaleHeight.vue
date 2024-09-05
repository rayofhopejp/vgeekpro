<script setup lang="ts">

type LocaleHeightAttributes = {
	height: number,
	originalUnit: "inch"|"feet"|"yard"|"millimeter"|"centimeter"|"decimeter"|"meter",
	isApprox?: boolean,
	/**
	 * 強制的にこの単位に変換します。
	 * 既定では、日本語および英国英語ではセンチメートル、米国英語ではフィート・インチ併用です。
	 */
	forceUnit?: "inch"|"feet"|"yard"|"millimeter"|"centimeter"|"decimeter"|"meter",
}

const props = defineProps<LocaleHeightAttributes>();

const { locale } = useI18n();

const toInch = (input: number, unit:"inch"|"feet"|"yard"|"millimeter"|"centimeter"|"decimeter"|"meter") => {
	let processBuffer = input;
	switch (unit) {
		case "inch":
			return input;
		case "feet":
			return input * 12;
		case "yard":
			return input * 36;
		case "meter":
			processBuffer *= 10;
		case "decimeter":
			processBuffer *= 10;
		case "centimeter":
			processBuffer *= 10;
		case "millimeter":
			return processBuffer / 25.4;
	}
}

const toMilliMeter = (input: number, unit:"inch"|"feet"|"yard"|"millimeter"|"centimeter"|"decimeter"|"meter") => {
	let processBuffer = input;
	switch (unit) {
		case "yard":
			processBuffer *= 3;
		case "feet":
			processBuffer *= 12;
		case "inch":
			return processBuffer * 25.4;
		case "meter":
			processBuffer *= 10;
		case "decimeter":
			processBuffer *= 10;
		case "centimeter":
			processBuffer *= 10;
		case "millimeter":
			return processBuffer;
	}
}

const calculatedHeight = computed(() => {
	const inputInch = toInch(props.height, props.originalUnit);
	const inputMilliMeter = toMilliMeter(props.height, props.originalUnit);
	let yard, feet, inch;
	if (props.forceUnit != undefined) {
		switch (props.forceUnit) {
			case "yard":
				yard = Math.floor(inputInch / 36 )
				feet = Math.floor(inputInch % 36 / 12)
				inch = Math.round(inputInch % 12);
				if (yard >= 1) {
					return `${yard}yd ${feet}ft ${inch}in`;
				} else if (feet >= 1) {
					return `${feet}ft ${inch}in`;
				} else {
					return `${inch}in`;
				}
			case "feet":
				feet = Math.floor(inputInch / 12)
				inch = Math.round(inputInch % 12);
				if (feet >= 1) {
					return `${feet}ft ${inch}in`;
				} else {
					return `${inch}in`;
				}
			case "inch":
				inch = Math.round(inputInch % 12);
				return `${inch}in`;
			case "meter":
				return `${inputMilliMeter/1000}m`;
			case "decimeter":
				return `${inputMilliMeter/100}dm`;
			case "centimeter":
				return `${inputMilliMeter/10}cm`;
			case "millimeter":
				return `${inputMilliMeter}mm`;
		}
	} else {
		switch (locale.value) {
			case "en-US":
				const feet = Math.floor(inputInch / 12)
				const inch = Math.round(inputInch % 12);
				if (feet >= 1) {
					return `${feet}ft ${inch}in`;
				} else {
					return `${inch}in`;
				}
			default:
				return `${inputMilliMeter/10}cm`;
		}
	}
})
</script>

<template>
	<span>
		{{(props.isApprox ?? false) ? `${$t("profileCommon.approx")} ` : ""}}{{calculatedHeight}}
	</span>
</template>

