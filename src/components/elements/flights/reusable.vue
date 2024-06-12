<template>
    <div>
        <svg width="16" height="17" viewBox="0 0 16 17" :fill="color" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_188_2394)">
                <path
                    d="M12.5518 7.24208C12.4453 7.24208 12.3411 7.2464 12.2382 7.25328L11.4422 7.28192L6.26368 0.823364H4.4328L8.07104 7.4032L3.84144 7.5552L2.49264 5.68528H1.10352L2.7856 8.53537L1.10352 11.3854H2.4928L3.90944 9.42128L8.19296 9.6376L4.4848 16.3434H6.316L11.5568 9.8072L12.0795 9.83344C12.2326 9.8488 12.3902 9.85744 12.552 9.85744C13.9411 9.85744 15.067 9.27217 15.067 8.54977C15.0669 7.82753 13.941 7.24208 12.5518 7.24208Z"
                    :fill="color" />
            </g>
            <defs>
                <clipPath id="clip0_188_2394">
                    <rect width="16" height="16" :fill="color" transform="translate(0 0.5)" />
                </clipPath>
            </defs>
        </svg>
    </div>
</template>

<script>
export default {
    props: {
        color:String
    }
}
</script>

<style scoped></style>