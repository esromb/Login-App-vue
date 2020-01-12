<template>
    <div class="container">
        <form>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md offset-3">
                    <h1>Create a Role</h1>
                    <hr>
                    <div class="form-group">
                        <label for="skillId">Skill Id</label>
                        <select 
                        id="skillId"
                        class="form-control"
                        v-model="roleData.skill">
                        <option v-for="kill in allSkills" 
                        v-bind:key="kill"  v-bind:value="kill.links[0].href">{{ kill.name }}</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="level">Level</label>
                        <select 
                            id="level"
                            class="form-control"
                            v-model="roleData.level">
                            <option 
                            v-for="level in levels" v-bind:key="level">{{ level }}</option>
                        </select>
                    </div>
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md offset-3 form-group">
                    <label for="onsite">
                        <input 
                        type="radio"
                        id="onsite"
                        value="'Onsite'"
                        v-model="roleData.geo"> Onsite
                    </label>
                    <label for="Offshore">
                        <input 
                        type="radio"
                        id="offshore"
                        value="'Offshore'"
                        v-model="roleData.geo"> Offshore
                    </label>
                    </div>
                    <div class="form-group">
                        <label for="gradeLeve">Grade Level</label>
                        <select 
                        id="gradeLevel"
                        class="form-control"
                        v-model="roleData.gradeLevel">
                        <option v-for="gradeLevel in gradeLevels" 
                        v-bind:key="gradeLevel">{{ gradeLevel }}</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="location">Location</label>
                        <select 
                        id="location"
                        class="form-control"
                        v-model="roleData.location">
                        <option v-for="location in locations"
                        v-bind:key="location">{{ location }}</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="costBucket">Cost Bucket</label>
                        <input 
                        type="text"
                        id="costBucket"
                        class="form-control"
                        v-model="roleData.costBucket">
                    </div>
                    <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md offset-3 form-group">
                    <label for="open">
                        <input 
                        type="radio"
                        id="open"
                        value="Open"
                        v-model="roleData.roleStatus"> Status Open
                    </label>
                    <label for="closed">
                        <input 
                        type="radio"
                        id="closed"
                        value="Closed"
                        v-model="roleData.roleStatus"> Status Closed
                    </label>
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
import {mapGetters, mapActions}  from 'vuex';

export default {
    name: "role",
    data() {
        return {
            roleData: {
                skill: null,
                level: '',
                gradeLevel: '',
                location: '',
                costBucket: '',
                roleStatus: '',
                geo: ''
                
            },
            levels: ['1','2','3','4'],
            gradeLevels: ['1','2','3','4'],
            locations: ['ATL', 'NYC', 'India'],
            isSubmitted: false,
            message: 'Successfully Added new Skill',
            error: false
        }
    },
    computed: mapGetters(['allSkills']),
    created() {
        this.fetchSkills();
    },
    methods: {
        ...mapActions(['fetchSkills']),
        submitted() {
            this.$store.dispatch("addRole", 
                this.roleData)
            .then(() => {
                this.error = false;
                this.roleData = {
                    skill: null,
                    level: '',
                    gradeLevel: '',
                    location: '',
                    costBucket: '',       
                };
            })
            .catch(error => {
                console.log(error);
                this.error = true;
            })
            this.isSubmitted = true;
        }
    }
    
}
</script>