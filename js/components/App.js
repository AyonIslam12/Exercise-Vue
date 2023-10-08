
import Assignments from "./Assignments.js"
import Panel from "./Panel.js"
export default {
    components:{Assignments,Panel},
   template: `
     <div>
        <assignments></assignments>
       <panel> This Is Default Content</panel>
       <panel theme="light">
          <template v-slot:heading>
              This Is Heading Content
          </template>

          This Is Body Content 

        <template v-slot:footer>
          This Is Footer Content
        </template>

       </panel>
     </div>
   `,
  
}