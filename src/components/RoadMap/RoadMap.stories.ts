// @ts-ignore
// RoadMap.stories.js
import RoadMapComponent from './RoadMap.vue';

//👇 This default export determines where your story goes in the story list
export default {
	title: 'RoadMap',
	component: RoadMapComponent
};

//👇 We create a “template” of how args map to rendering
const Template = () => ({
	components: { RoadMapComponent },
	template: '<RoadMapComponent/>'
});

export const RoadMap = Template.bind({});
