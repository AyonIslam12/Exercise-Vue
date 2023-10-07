export default {
    template:`
    <div class="my-2">
            <span 
                v-for="tag in tags" 

                @click="$emit('change',tag)"

                class="p-1 border m-1" 

                style="cursor: pointer !important;"

                :class="{'bg-primary': tag === currentTag}"
            > {{ capitalizeFirstLetter(tag) }}
            </span>
         </div>
    `,

    props:{
        initialTags: Array,
        currentTag : String
    },

    computed:{
        tags(){
            return new Set(['all', ...this.initialTags]);
        }
    },
    methods: {
        capitalizeFirstLetter(tag) {
          return tag.charAt(0).toUpperCase() + tag.slice(1);
        },
      },
}