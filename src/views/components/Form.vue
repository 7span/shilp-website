<template>
  <div class="box">
    <s-blocks>
      <s-block size="auto">
        <s-field label="Name">
          <s-select-plus
            url="https://api.mcook.co.in:8989/web/v3/search_form_entity/"
            :params="{type: 'inventory_category',search: null}"
            :responseHook="(res)=>{return res.data.data}"
            placeholder="e.g. John"
          ></s-select-plus>
        </s-field>
      </s-block>

      <s-block size="auto"></s-block>

      <s-block size="auto"></s-block>
    </s-blocks>

    <s-blocks>
      <s-block size="auto">
        <s-field label="Name">
          <s-textbox type="text" placeholder="e.g. John"></s-textbox>
        </s-field>
      </s-block>

      <s-block size="auto">
        <s-field label="Email" before="@" after=".com" desc="Gmail or Yahoo only!" color="danger">
          <s-textbox type="email" placeholder="e.g. john@doe.com"></s-textbox>
        </s-field>
      </s-block>

      <s-block size="auto">
        <s-field label="Gender">
          <s-radio name="gender" :options="genderOptions"></s-radio>
        </s-field>
      </s-block>
    </s-blocks>

    <s-blocks>
      <s-block size="auto">
        <s-field label="City">
          <s-select :options="cityOptions"></s-select>
        </s-field>
      </s-block>

      <s-block size="auto">
        <s-field label="Skills">
          <s-checkbox v-model="form.skills" name="skills" :options="skillOptions"></s-checkbox>
        </s-field>
      </s-block>

      <s-block size="auto">
        <s-field label="Are you married?">
          <s-checkbox name="married" id="married">I'm married!</s-checkbox>
        </s-field>
      </s-block>
    </s-blocks>

    <s-blocks>
      <s-block size="auto">
        <s-field label="Choose Time">
          <s-radio color="primary" component="button" :options="timeOptions"></s-radio>
        </s-field>
      </s-block>

      <s-block size="auto"></s-block>
    </s-blocks>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        skills: ["react"]
      },
      timeOptions: [
        {
          label: "Breakfast",
          value: "breakfast",
          id: "breakfast"
        },
        {
          label: "Lunch",
          value: "lunch",
          id: "lunch"
        },
        {
          label: "Dinner",
          value: "dinner",
          id: "dinner"
        }
      ],
      genderOptions: [
        { label: "Male", value: "male", id: "gender-male", selected: true },
        {
          label: "Female",
          value: "female",
          id: "gender-female"
        }
      ],
      cityOptions: [
        { label: "Ahmedabad", value: "ahmedabad" },
        { label: "Rajkot", value: "rajkot" }
      ],
      skillOptions: [
        { label: "VueJS", value: "vue", id: "vue" },
        { label: "ReactJS", value: "react", id: "react" },
        { label: "AngularJS", value: "angular", id: "angular" },
        { label: "Bootstrap", value: "bootstrap", id: "bootstrap" }
      ]
    };
  }
};
</script>
