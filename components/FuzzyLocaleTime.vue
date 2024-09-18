<script lang="ts" setup>

type LocaleTimeAttributes = {
	year?: string | number,
	quarterYear?: 1 | 2 | 3 | 4,
	halfYear?: 1 | 2,
	month?: string | number,
	fuzzyDay?: "early" | "mid" | "late",
	halfMonth?: "early" | "late",
	day?: string | number,
	isFuzzy?: boolean,
}

const props = defineProps<LocaleTimeAttributes>();

const {locale} = useI18n();

const englishMonthName = (month: number, isZeroStart: boolean = false) => {
	if (isZeroStart) month += 1;
	switch (month) {
		case 1:
			return "January"
		case 2:
			return "February"
		case 3:
			return "March"
		case 4:
			return "April"
		case 5:
			return "May"
		case 6:
			return "June"
		case 7:
			return "July"
		case 8:
			return "August"
		case 9:
			return "September"
		case 10:
			return "October"
		case 11:
			return "November"
		case 12:
			return "December"
		default:
			return "";
	}
}

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

const generateDisplayValueBase = () => {
	if (props.year != undefined) {
		//年が定義されている
		if (props.quarterYear != undefined) {
			//四半期
			switch (locale.value) {
				case "en":
				case "en-US":
					switch (props.quarterYear) {
						case 1:
							return `First quarter of ${props.year}`;
						case 2:
							return `Second quarter of ${props.year}`;
						case 3:
							return `Third quarter of ${props.year}`;
						case 4:
							return `Fourth quarter of ${props.year}`;
						default:
							return `Q${props.quarterYear} ${props.year}`;
					}
				case "en-GB":
					return `Q${props.quarterYear} ${props.year}`;
				case "ja":
				default:
					return `${props.year}年第${props.quarterYear}四半期`;
			}
		} else if (props.halfYear != undefined) {
			//半期
			switch (locale.value) {
				case "en":
				case "en-US":
					switch (props.halfYear) {
						case 1:
							return `First half of ${props.year}`;
						case 2:
							return `Second half of ${props.year}`;
						default:
							return `H${props.halfYear} ${props.year}`;
					}
				case "en-GB":
					return `H${props.halfYear} ${props.year}`;
				case "ja":
				default:
					if (props.halfYear == 1) {
						return `${props.year}年上半期`;
					} else {
						return `${props.year}年下半期`;
					}
			}
		} else if (props.month != undefined) {
			if (props.fuzzyDay != undefined) {
				switch (props.fuzzyDay) {
					case "early":
						switch (locale.value) {
							case "en":
							case "en-US":
							case "en-GB":
								return `Early ${englishMonthName(Number.parseInt(props.month))} ${props.year}`;
							case "ja":
							default:
								return `${props.year}年${props.month}月上旬`;
						}
					case "mid":
						switch (locale.value) {
							case "en":
							case "en-US":
							case "en-GB":
								return `Mid ${englishMonthName(Number.parseInt(props.month))} ${props.year}`;
							case "ja":
							default:
								return `${props.year}年${props.month}月中旬`;
						}
					case "late":
						switch (locale.value) {
							case "en":
							case "en-US":
							case "en-GB":
								return `Late ${englishMonthName(Number.parseInt(props.month))} ${props.year}`;
							case "ja":
							default:
								return `${props.year}年${props.month}月下旬`;
						}
					default:
						switch (locale.value) {
							case "en":
							case "en-US":
								return `${englishMonthName(Number.parseInt(props.month))} ${props.year}`;
							case "en-GB":
								return `${englishMonthName(Number.parseInt(props.month))} ${props.year}`;
							case "ja":
							default:
								return `${props.year}年${props.month}月`;
						}
				}
			} else if (props.halfMonth != undefined) {
				switch (props.halfMonth) {
					case "early":
						switch (locale.value) {
							case "en":
							case "en-US":
							case "en-GB":
								return `Early ${englishMonthName(Number.parseInt(props.month))} ${props.year}`;
							case "ja":
							default:
								return `${props.year}年${props.month}月前半`;
						}
					case "late":
						switch (locale.value) {
							case "en":
							case "en-US":
							case "en-GB":
								return `Late ${englishMonthName(Number.parseInt(props.month))} ${props.year}`;
							case "ja":
							default:
								return `${props.year}年${props.month}月後半`;
						}
					default:
						switch (locale.value) {
							case "en":
							case "en-US":
								return `${englishMonthName(Number.parseInt(props.month))} ${props.year}`;
							case "en-GB":
								return `${englishMonthName(Number.parseInt(props.month))} ${props.year}`;
							case "ja":
							default:
								return `${props.year}年${props.month}月`;
						}
				}
			} else if (props.day != undefined) {
				switch (locale.value) {
					case "en":
					case "en-US":
						return `${englishMonthName(Number.parseInt(props.month))} ${props.day}${englishNumberSuffix(Number.parseInt(props.day))}, ${props.year}`;
					case "en-GB":
						return `${props.day}${englishNumberSuffix(Number.parseInt(props.day))} ${englishMonthName(Number.parseInt(props.month))} ${props.year}`;
					case "ja":
					default:
						return `${props.year}年${props.month}月${props.day}日`;
				}
			} else {
				switch (locale.value) {
					case "en":
					case "en-US":
						return `${englishMonthName(Number.parseInt(props.month))} ${props.year}`;
					case "en-GB":
						return `${englishMonthName(Number.parseInt(props.month))} ${props.year}`;
					case "ja":
					default:
						return `${props.year}年${props.month}月`;
				}
			}
		} else {
			return `${props.year}${locale.value == "ja" ? "年" : ""}`;
		}
	} else if (props.month != undefined) {
		if (props.fuzzyDay != undefined) {
			switch (props.fuzzyDay) {
				case "early":
					switch (locale.value) {
						case "en":
						case "en-US":
						case "en-GB":
							return `Early ${englishMonthName(Number.parseInt(props.month))}`;
						case "ja":
						default:
							return `${props.month}月上旬`;
					}
				case "mid":
					switch (locale.value) {
						case "en":
						case "en-US":
						case "en-GB":
							return `Mid ${englishMonthName(Number.parseInt(props.month))}`;
						case "ja":
						default:
							return `${props.month}月中旬`;
					}
				case "late":
					switch (locale.value) {
						case "en":
						case "en-US":
						case "en-GB":
							return `Late ${englishMonthName(Number.parseInt(props.month))}`;
						case "ja":
						default:
							return `${props.month}月下旬`;
					}
				default:
					switch (locale.value) {
						case "en":
						case "en-US":
							return `${englishMonthName(Number.parseInt(props.month))}`;
						case "en-GB":
							return `${englishMonthName(Number.parseInt(props.month))}`;
						case "ja":
						default:
							return `${props.month}月`;
					}
			}
		} else if (props.halfMonth != undefined) {
			switch (props.halfMonth) {
				case "early":
					switch (locale.value) {
						case "en":
						case "en-US":
						case "en-GB":
							return `Early ${englishMonthName(Number.parseInt(props.month))}`;
						case "ja":
						default:
							return `${props.month}月前半`;
					}
				case "late":
					switch (locale.value) {
						case "en":
						case "en-US":
						case "en-GB":
							return `Late ${englishMonthName(Number.parseInt(props.month))}`;
						case "ja":
						default:
							return `${props.month}月後半`;
					}
				default:
					switch (locale.value) {
						case "en":
						case "en-US":
							return `${englishMonthName(Number.parseInt(props.month))}`;
						case "en-GB":
							return `${englishMonthName(Number.parseInt(props.month))}`;
						case "ja":
						default:
							return `${props.month}月`;
					}
			}
		} else if (props.day != undefined) {
			switch (locale.value) {
				case "en":
				case "en-US":
					return `${englishMonthName(Number.parseInt(props.month))} ${props.day}${englishNumberSuffix(Number.parseInt(props.day))}`;
				case "en-GB":
					return `${props.day}${englishNumberSuffix(Number.parseInt(props.day))} ${englishMonthName(Number.parseInt(props.month))}`;
				case "ja":
				default:
					return `${props.month}月${props.day}日`;
			}
		} else {
			switch (locale.value) {
				case "en":
				case "en-US":
					return `${englishMonthName(Number.parseInt(props.month))}`;
				case "en-GB":
					return `${englishMonthName(Number.parseInt(props.month))}`;
				case "ja":
				default:
					return `${props.month}月`;
			}
		}
	} else if (props.day != undefined) {
		switch (locale.value) {
			case "en":
			case "en-US":
				return `${props.props}${englishNumberSuffix(Number.parseInt(props.day))}`;
			case "en-GB":
				return `${props.props}${englishNumberSuffix(Number.parseInt(props.day))}`;
			case "ja":
			default:
				return `${props.props}日`;
		}
	} else {
		switch (locale.value) {
			case "en":
			case "en-US":
			case "en-GB":
				return "Sometime";
			case "ja":
			default:
				return "いつか";
		}
	}
}

const displayValue = computed(() => {
	return `${generateDisplayValueBase()}${(props.isFuzzy ?? false) ? "頃" : ""}`;
})
</script>

<template>
	<span v-text="displayValue"></span>
</template>

<style scoped>

</style>
