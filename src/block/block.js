import EditComponent from "./edit";
import SaveComponent from "./save";
import {blockAttributes} from "./attributes";

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

registerBlockType(
	'outside/outside-block',
	{
		title: 'Outside block',
		icon: 'smiley',
		category: 'common',
		attributes: blockAttributes,
		edit: EditComponent,
		save: SaveComponent,
	}
);
