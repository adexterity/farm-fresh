<script setup>

</script>

<template>
    <section class="min-h-[100vh] font-body relative border py-[5px]">
        <img src="../assets/emojione.jpg" class="absolute top-0 left-0 z-[2]" />
        <div class="container flex justify-around items-center">
            <div class="catalogue-text z-[4]">
                <h3 class="font-xl text-[30px]">Browse our catalog</h3>
                <p>We have a range of products <br /> you can choose from</p>
            </div>
            <div class="catalogue-cards flex flex-wrap w-[550px] border gap-6">
                <div class="dairy-card rounded-[20px] bg-[#F9FABC] w-[250px] h-[250px] relative">
                    <div class="mt-3 ml-3">

                        <img src="../assets/dairy-image-vec.svg" alt="icon of diary product" />
                        <p class="mt-3">Diary Products</p>
                    </div>
                    <div>
                        <img class="rounded-[20px] absolute bottom-3 right-3 z-[3]" src="../assets/dairy-img.jpg"
                            alt="picture of diary product" />
                        <div class="absolute bottom-0 right-0 w-[116px] h-[116px] bg-[#EEEF20] rounded-[20px] z-[2]"></div>

                    </div>
                </div>
                <div class="meat-card rounded-[20px] bg-[#F2D3B6] w-[250px] h-[250px] relative">
                    <div class="mt-3 ml-3">

                        <img src="../assets/meat-icon.svg" alt="icon of meat product" />
                        <p class="mt-3">Meat Products</p>
                    </div>
                    <div>
                        <img class="rounded-[20px] absolute bottom-3 right-3 z-[3]" src="../assets/meat-img.jpg"
                            alt="picture of meat product" />
                        <div class="absolute bottom-0 right-0 w-[116px] h-[116px] bg-[#E29650] rounded-[20px] z-[2]"></div>

                    </div>
                </div>
                <div class="vegetable-card rounded-[20px] bg-[#E5EFB2] w-[250px] h-[250px] relative">
                    <div class="mt-3 ml-3">

                        <img src="../assets/vegetable-icon.svg" alt="icon of vegetable product" />
                        <p class="mt-3">Vegetables</p>
                    </div>
                    <div>
                        <img class="rounded-[20px] absolute bottom-3 right-3 z-[3]" src="../assets/vegetable-img.jpg"
                            alt="picture of vegetable product" />
                        <div class="absolute bottom-0 right-0 w-[116px] h-[116px] bg-[#C2DA47] rounded-[20px] z-[2]"></div>
                    </div>
                </div>
            </div>
        </div>

    </section>
</template>

<style></style>