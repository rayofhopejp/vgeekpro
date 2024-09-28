<script lang="ts" setup>

type VideoCardAttributes = {
    title: string,
    url: string,
    thumbnail: string,
    displayName: string
}

const { locale } = useI18n();
const localePath = useLocalePath();

const props = defineProps<VideoCardAttributes>();
const imagePath = computed({
    get: () => {
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
        <div>なんかすごいやつ</div>
        <div class="tw-mb-28 tw-leading-loose tw-text-black">
            <p class="font-slogan tw-text-center tw-text-3xl xl:tw-text-5xl" v-text="props.title"></p>
            <div class="tw-flex tw-flex-col">
                <NuxtLink :href="localePath(`/talents/${props.url}`)"
                    class="tw-self-stretch tw-rounded-full tw-bg-rose-500 hover:tw-bg-rose-700 tw-text-white tw-px-8 tw-py-4 tw-text-center"
                    rel="noopener noreferrer">
                    {{ $t("topPage.toProfilePage") }}
                    <img class="test" :alt="props.title" :src="props.thumbnail" />
                </NuxtLink>
            </div>
        </div>
    </section>
</template>

<style scoped></style>
