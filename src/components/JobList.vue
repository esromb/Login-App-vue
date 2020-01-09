<template>
  <div class="events container">
    <h2 class="subtitle is-3">
        Check below options
    </h2>
    <div class="columns is-multiline">
      <div v-for="event in events" :event="event" :key="event.id" class="column is-one-quarter">
        <router-link :to="'/event/' + event.id">
          <EventCard :event="event" />
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
import EventCard from '@/components/JobCard';
export default {
  name: 'EventsList',
  components : {
    EventCard
  },
  data () {
    return {
      event: {},
      events: [
        {
          id: 1,
          name: 'Create Skill',
          category: 'Job Posting',
          description: 'Create a new skill per requirement of the project',
          },
        {
          id: 2,
          name: 'Create Role',
          category: 'Roles',
          description: 'Add a new role per requirement to the project',
        },
          {
          id: 3,
          name: 'Add Team members',
          category: 'Candidates',
          description: 'Add a selected team member bjb',
        },
         {
          id: 4,
          name: 'View Team members',
          category: 'Candidates',
          description: 'To get the list of team members',
        },
        {
          id: 5,
          name: 'Update Team members',
          category: 'Candidates',
          description: 'Update team member details',
        }
      ]
    }  
  }
}
</script>
<style lang="scss" scoped>
  .events {
    margin-top: 100px;
    text-align: center;
  }
</style>