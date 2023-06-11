import { defineStore } from 'pinia'

export const useDiaryStore = defineStore("diaryStore", {
    state: () => ({
        diary: [
            {id: 1, diary: "bugün hava bulutlu...", date: "11.06.2023", isFav: false},
            {id: 2, diary: "bugün pinia uygulamasına başladık!", date: "10.06.2023", isFav: false},
        ],
        name: "Trabzonspor"
    })
})