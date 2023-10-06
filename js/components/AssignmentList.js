import Assignment from "./Assignment.js"
export default {
    components:{Assignment},
    template: `
    <section>
     <div v-if="assignments.length">
         <h4>
            {{ title }}
            <span>({{ assignments.length }})</span>
         </h4>
         <div class="my-2">
            <span 
                v-for="tag in tags" 
                @click="currentTag = tag" 
                class="p-1 border m-1" 
                style="cursor: pointer !important;"
                :class="{'bg-primary': tag === currentTag}"
            > {{ capitalizeFirstLetter(tag) }}</span>
         </div>
         <ul>
            <assignment  v-for="assignment in filteredAssignments" :key="assignment.id" :assignment="assignment"></assignment>
         </ul>
     </div>
     <div v-else >
         <h4>{{ title }}</h4>
         <div :class="'alert alert-' + bgColor + ' text-center fw-bolder text-dark'" role="alert">
                {{ exitData }}
            </div>
     </div>
     </section>
    `,
    props:{
        assignments: Array,
        title: String,
        exitData: String,
        bgColor: String
    },
    data(){
        return{
            currentTag: 'all'
        }

    }, 
    computed:{
        filteredAssignments(){
            if(  this.currentTag == 'all'){
                return  this.assignments;
            }
            return this.assignments.filter(a=>a.tag === this.currentTag)
        },
        tags(){
            return new Set(['all', ...this.assignments.map(a=> a.tag)]);
        }
    },
    methods: {
        capitalizeFirstLetter(tag) {
          return tag.charAt(0).toUpperCase() + tag.slice(1);
        },
      },
}