import Assignment from "./Assignment.js"
import AssignmentTags from "./AssignmentTags.js";
export default {
    components:{Assignment,AssignmentTags},
    template: `
    <section>
     <div v-if="assignments.length">
         <h4>
            {{ title }}
            <span>({{ assignments.length }})</span>
         </h4>
         <assignment-tags
            v-model:currentTag="currentTag"
            :initial-tags="assignments.map(a => a.tag)"
            />
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
        }
       
    },
   
}