import { defineStore } from 'pinia'

export const useDiaryStore = defineStore("diaryStore", {
    state: () => ({
        diary: [
            {id: 1, diary: "bugün hava bulutlu...", date: "11.06.2023", isFav: false},
            {id: 2, diary: "bugün pinia uygulamasına başladık!", date: "10.06.2023", isFav: true},
        ]
    }),
    getters: {
        favs(){
            return this.diary.filter(gunluk => gunluk.isFav)
        },
        favCount(){
            return this.diary.reduce((previous, current) => {
                return current.isFav ? previous + 1 : previous
            }, 0)
        },
        totalCount: (state) =>{
            return state.diary.length
        }
    },
    actions: {
        newDiary(diary){
            this.diary.push(diary)
        },
        toggleFav(id){
            const diary = this.diary.find(gunluk => gunluk.id === id)
            diary.isFav = !diary.isFav
        },
        deleteDiary(id){
            this.diary = this.diary.filter(gunluk => {
                return gunluk.id !== id
            })
        }
    }
})