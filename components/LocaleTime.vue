<script setup lang="ts">

type LocaleTimeAttributes = {
	year?: string|number,
	month?: string|number,
	day?: string|number,
	isShort?: boolean,
	isLong?: boolean,
}

const props = defineProps<LocaleTimeAttributes>();

const dateTimeValue = toRef("");
const dateTimeType = toRef("");
const usingTimeElement = toRef(true);
if (props.year != undefined) {
	if (props.month != undefined) {
		if (props.day != undefined) {
			dateTimeType.value = "ymd";
			dateTimeValue.value = `${props.year}-${props.month}-${props.day}`;
		} else {
			dateTimeType.value = "ym";
			dateTimeValue.value = `${props.year}-${props.month}`;
		}
	} else {
		dateTimeType.value = "y";
		dateTimeValue.value = `${props.year}`
	}
} else if (props.month != undefined) {
	if (props.day != undefined) {
		dateTimeType.value = "md";
		dateTimeValue.value = `${props.month}-${props.day}`;
	} else {
		dateTimeType.value = "m";
		usingTimeElement.value = false;
	}
} else if (props.day != undefined) {
	dateTimeType.value = "d";
	usingTimeElement.value = false;
} else {
	usingTimeElement.value = false;
}

const { locale } = useI18n();

const englishNumberSuffix = (int: number) => {
	switch (int) {
		case 1:
			return "st"
		case 2:
			return "nd"
		case 3:
			return "rd"
		default:
			return "th"
	}
}

const englishMonthName = (month: number, isShortName: boolean = false, isZeroStart: boolean = false) => {
	if (isZeroStart) month += 1;
	switch (month) {
		case 1:
			return isShortName ? "Jan." : "January"
		case 2:
			return isShortName ? "Feb." : "February"
		case 3:
			return isShortName ? "Mar." : "March"
		case 4:
			return isShortName ? "Apr." : "April"
		case 5:
			return "May"
		case 6:
			return isShortName ? "Jun." : "June"
		case 7:
			return isShortName ? "Jul." : "July"
		case 8:
			return isShortName ? "Aug." : "August"
		case 9:
			return isShortName ? "Sep." : "September"
		case 10:
			return isShortName ? "Oct." : "October"
		case 11:
			return isShortName ? "Nov." : "November"
		case 12:
			return isShortName ? "Dec." : "December"
		default:
			return "";
	}
}

const japaneseMonthName = (month: number, isLongName: boolean = false, isZeroStart: boolean = false) => {
	if (isZeroStart) month += 1;
	switch (month) {
		case 1:
			return isLongName ? "睦月" : "1月"
		case 2:
			return isLongName ? "如月" : "2月"
		case 3:
			return isLongName ? "弥生" : "3月"
		case 4:
			return isLongName ? "卯月" : "4月"
		case 5:
			return isLongName ? "皐月" : "5月"
		case 6:
			return isLongName ? "水無月" : "6月"
		case 7:
			return isLongName ? "文月" : "7月"
		case 8:
			return isLongName ? "葉月" : "8月"
		case 9:
			return isLongName ? "長月" : "9月"
		case 10:
			return isLongName ? "神無月" : "10月"
		case 11:
			return isLongName ? "霜月" : "11月"
		case 12:
			return isLongName ? "師走" : "12月"
		default:
			return "";
	}
}

const displayValue = computed(() => {
	switch (dateTimeType.value) {
		case "ymd":
			switch (locale.value) {
				case "en":
				case "en-US":
					return `${englishMonthName(Number.parseInt(props.month, props.isShort))} ${props.day}${englishNumberSuffix(Number.parseInt(props.day))}, ${props.year}`;
				case "en-GB":
					return `${props.day}${englishNumberSuffix(Number.parseInt(props.day))} ${englishMonthName(Number.parseInt(props.month), props.isShort)} ${props.year}`;
				case "ja":
				default:
					return `${props.year}年${japaneseMonthName(Number.parseInt(props.month), props.isLong)}${props.day}日`;
			}
		case "ym":
			switch (locale.value) {
				case "en":
				case "en-US":
				case "en-GB":
					return `${englishMonthName(Number.parseInt(props.month), props.isShort)} ${props.year}`;
				case "ja":
				default:
					return `${props.year}年${japaneseMonthName(Number.parseInt(props.month), props.isLong)}`;
			}
		case "y":
			switch (locale.value) {
				case "en":
				case "en-US":
				case "en-GB":
					return `${props.year}`;
				case "ja":
				default:
					return `${props.year}年`;
			}
		case "md":
			switch (locale.value) {
				case "en":
				case "en-US":
					return `${englishMonthName(Number.parseInt(props.month, props.isShort))} ${props.day}${englishNumberSuffix(Number.parseInt(props.day))}`;
				case "en-GB":
					return `${props.day}${englishNumberSuffix(Number.parseInt(props.day))} ${englishMonthName(Number.parseInt(props.month), props.isShort)}`;
				case "ja":
				default:
					return `${japaneseMonthName(Number.parseInt(props.month), props.isLong)}${props.day}日`;
			}
		case "m":
			switch (locale.value) {
				case "en":
				case "en-US":
				case "en-GB":
					return englishMonthName(Number.parseInt(props.month), props.isShort);
				case "ja":
				default:
					return japaneseMonthName(Number.parseInt(props.month), props.isLong);
			}
		case "d":
			switch (locale.value) {
				case "en":
				case "en-US":
				case "en-GB":
					return `${props.day}${englishNumberSuffix(Number.parseInt(props.day))}`;
				case "ja":
				default:
					return `${props.day}日`;
			}
	}
})
</script>

<template>
	<time v-if="usingTimeElement" :datetime="dateTimeValue" v-text="displayValue"></time>
	<span v-else v-text="displayValue"></span>
</template>

<style scoped>

</style>
