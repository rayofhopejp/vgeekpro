<script lang="ts" setup>
import UpperBodyImage from "~/components/UpperBodyImage.vue";

type MemberAttributes = {
    members: string[],
}

const { locale } = useI18n();
const localePath = useLocalePath();
const runtimeConfig = useRuntimeConfig();

const props = defineProps<MemberCardAttributes>();
const imagePath = computed({
    get: () => {
        console.log(runtimeConfig.apiServer);

        const memberVideo = await useFetch(`${runtimeConfig.apiServer}/videos?name=${props.name.join(",")}`);
        console.log("memberVideo", memberVideo);


        console.log()
        if (props.variation != undefined) {
            return `/images/members/${props.memberId}/upper_body_variation_${props.variation}.webp`;
        } else {
            return `/images/members/${props.memberId}/upper_body.webp`;
        }

    }
})



</script>

<template>
    <section class="tw-items-center">
        <UpperBodyImage :alt="props.imageAlt" :isDisableMarginTopExpand="true" :memberId="props.imageId" />
        <div class="tw-mb-28 tw-leading-loose tw-text-black">
            <p class="font-slogan tw-text-center tw-text-3xl xl:tw-text-5xl"
                v-text="locale == 'ja' ? props.name : props.yomi"></p>
            <p class="font-slogan tw-text-center tw-mb-14" v-text="locale == 'ja' ? props.yomi : props.name"></p>
            <div class="tw-flex tw-flex-col">
                <NuxtLink :href="localePath(`/talents/${props.profileId}`)"
                    class="tw-self-stretch tw-rounded-full tw-bg-rose-500 hover:tw-bg-rose-700 tw-text-white tw-px-8 tw-py-4 tw-text-center"
                    rel="noopener noreferrer">
                    {{ $t("topPage.toProfilePage") }}
                </NuxtLink>
            </div>
        </div>
    </section>
</template>

<style scoped></style>
