<template>
    <div class="container">
        <form>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md offset-3">
                    <h1>A Skill Successfully Created</h1>
                  
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md offset-3 form-group">
                    <label for="onsite"> Skill Name </label>
                        <input 
                        type="text"
                        id="onsite"
                        value="Onsite"
                        v-model="name">
                    </div>
                
                    
            </div>
            </div>
            <hr>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md offset-3">
                    <button class="btn btn-primary" 
                    @click.prevent="submitted">Submit</button>
                     
                </div>
               
            </div>
        </form>
    </div>
</template>

<script>
export default {
    name: "skill",
    data() {
        return {
            name: '',
            message: 'Successfully Added new Skill',
            error: false
        }
    },
    methods: {
        submitted() {
            this.$store.dispatch("ADDSKILL", {
                name: this.name
            })
            .then(() => {
                this.error = false;
                this.name = '';
            })
            .catch(error => {
                console.log(error);
                this.error = true;
            })
        }
    }
}
</script>