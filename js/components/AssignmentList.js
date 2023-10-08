import Assignment from "./Assignment.js"
import AssignmentTags from "./AssignmentTags.js";
export default {
    components:{Assignment,AssignmentTags},
    template: `
    <section>
     <div v-if="assignments.length" class="m-4 border p-4">
        <div class="d-flex justify-content-between">
            <h4 class="mr-5">{{ title }} <span>({{ assignments.length }})</span></h4>
            <button v-show="canToggle" @click="$emit('toggle')" type="button" class="btn-close bg-light"></button>
        </div>
         <assignment-tags
            v-model:currentTag="currentTag"
            :initial-tags="assignments.map(a => a.tag)"
            />
         <ul>
            <assignment  v-for="assignment in filteredAssignments" :key="assignment.id" :assignment="assignment"></assignment>
         </ul>
         <slot></slot>
     </div>
    
     </section>
    `,
    props:{
        assignments: Array,
        title: String,
        bgColor: String,
        canToggle: { type: Boolean, default: false}
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