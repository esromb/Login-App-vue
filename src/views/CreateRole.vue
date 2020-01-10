<template>
    <div class="container">
        <form>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md offset-3">
                    <h1>Create a Role</h1>
                    <hr>
                    <div class="form-group">
                        <label for="skillId">Skill Id</label>
                        <input 
                        type="text"
                        id="skillId"
                        class="form-control"
                        v-model="userData.skillId">
                    </div>
                    <div class="form-group">
                        <label for="level">Level</label>
                        <select 
                            id="level"
                            class="form-control"
                            v-model="userData.level">
                            <option 
                            v-for="level in levels" v-bind:key="level">{{ level }}</option>
                        </select>
                    </div>
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md offset-3 form-group">
                    <label for="onsite">
                        <input 
                        type="radio"
                        id="onsite"
                        value="Onsite"
                        v-model="geo"> Onsite
                    </label>
                    <label for="Offshore">
                        <input 
                        type="radio"
                        id="offshore"
                        value="Offshore"
                        v-model="geo"> Offshore
                    </label>
                    </div>
                    <div class="form-group">
                        <label for="gradeLeve">Grade Level</label>
                        <select 
                        id="gradeLevel"
                        class="form-control"
                        v-model="userData.gradeLevel">
                        <option v-for="gradeLevel in gradeLevels" 
                        v-bind:key="gradeLevel">{{ gradeLevel }}</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="location">Location</label>
                        <select 
                        id="location"
                        class="form-control"
                        v-model="userData.location">
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
                        v-model="userData.costBucket">
                    </div>
                    <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md offset-3 form-group">
                    <label for="open">
                        <input 
                        type="radio"
                        id="open"
                        value="Open"
                        v-model="roleStatus"> Status Open
                    </label>
                    <label for="closed">
                        <input 
                        type="radio"
                        id="closed"
                        value="Closed"
                        v-model="roleStatus"> Status Closed
                    </label>
                    </div>
                    
                </div>
            </div>
            <hr>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md offset-3">
                    <button class="btn btn-primary" 
                    @click="submitted">Submit</button>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            roleData: {
                skillId: null,
                level: '',
                gradeLevel: '',
                location: '',
                costBucket: '',
                
                
            },
            levels: ['1','2','3','4'],
            gradeLevels: ['1','2','3','4'],
            roleStatus: '',
            locations: ['ATL', 'NYC', 'India'],
            geo: '',
            isSubmitted: false
        }
    },
    methods: {
        submitted() {
            this.isSubmitted = true;
        }
    }
}
</script>