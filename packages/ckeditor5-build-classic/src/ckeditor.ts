/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

// The editor creator to use.
import { ClassicEditor as ClassicEditorBase } from '@ckeditor/ckeditor5-editor-classic';

import { Essentials } from '@ckeditor/ckeditor5-essentials';
import { CKFinderUploadAdapter } from '@ckeditor/ckeditor5-adapter-ckfinder';
import { Autoformat } from '@ckeditor/ckeditor5-autoformat';
import { Bold, Italic } from '@ckeditor/ckeditor5-basic-styles';
import { BlockQuote } from '@ckeditor/ckeditor5-block-quote';
import { CKBox } from '@ckeditor/ckeditor5-ckbox';
import { CKFinder } from '@ckeditor/ckeditor5-ckfinder';
import { EasyImage } from '@ckeditor/ckeditor5-easy-image';
import { Heading } from '@ckeditor/ckeditor5-heading';
import { Image, ImageCaption, ImageStyle, ImageToolbar, ImageUpload, PictureEditing } from '@ckeditor/ckeditor5-image';
import { Indent } from '@ckeditor/ckeditor5-indent';
import { Link } from '@ckeditor/ckeditor5-link';
import { List } from '@ckeditor/ckeditor5-list';
import { MediaEmbed } from '@ckeditor/ckeditor5-media-embed';
import { Paragraph } from '@ckeditor/ckeditor5-paragraph';
import { PasteFromOffice } from '@ckeditor/ckeditor5-paste-from-office';
import { Table, TableToolbar } from '@ckeditor/ckeditor5-table';
import { TextTransformation } from '@ckeditor/ckeditor5-typing';
import { CloudServices } from '@ckeditor/ckeditor5-cloud-services';

// <--- ADDED Plugin
import { HorizontalLine } from '@ckeditor/ckeditor5-horizontal-line';
import { Font } from '@ckeditor/ckeditor5-font';
import { GeneralHtmlSupport } from '@ckeditor/ckeditor5-html-support';
import { LineHeight } from '@rickx/ckeditor5-line-height';

export default class ClassicEditor extends ClassicEditorBase {
	public static override builtinPlugins = [
		Essentials,
		CKFinderUploadAdapter,
		Autoformat,
		Bold,
		Italic,
		BlockQuote,
		CKBox,
		CKFinder,
		CloudServices,
		EasyImage,
		Heading,
		Image,
		ImageCaption,
		ImageStyle,
		ImageToolbar,
		ImageUpload,
		Indent,
		Link,
		List,
		MediaEmbed,
		Paragraph,
		PasteFromOffice,
		PictureEditing,
		Table,
		TableToolbar,
		TextTransformation,
		HorizontalLine, Font,
		GeneralHtmlSupport,
		LineHeight
	];

	public static override defaultConfig = {
		toolbar: {
			items: [
				'|', 'heading',
				'|', 'fontSize', 'fontFamily', 'fontColor', 'fontBackgroundColor',
				'|', 'bold', 'italic',
				'|', 'bulletedList', 'numberedList', 'outdent', 'indent',
				'|', 'link', 'uploadImage', 'horizontalLine', 'undo', 'redo', 'insertTable', 'blockQuote', 'mediaEmbed', 'lineHeight'
			]
		},
		image: {
			toolbar: [
				'imageStyle:inline',
				'imageStyle:block',
				'imageStyle:side',
				'|',
				'toggleImageCaption',
				'imageTextAlternative'
			]
		},
		table: {
			contentToolbar: [
				'tableColumn',
				'tableRow',
				'mergeTableCells'
			]
		},
		htmlSupport: {
			allow: [
				{
					name: 'div',
					styles: true as any
				},
				{
					name: 'p',
					styles: true as any
				},
				{
					name: 'span',
					styles: true as any
				},
				{
					name: 'ul',
					styles: true as any
				},
				{
					name: 'ol',
					styles: true as any
				},
				{
					name: 'li',
					styles: true as any
				}
			]
		},
		// This value must be kept in sync with the language defined in webpack.config.js.
		language: 'en',
		lineHeight: {
			// specify your otions in the lineHeight config object.
			// Default values are ['default', 1, 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 2, 2.5]
			options: [
				'default',
				'10px',
				2,
				'150%',
				'8em',
				{
					title: 'Custom Title',
					model: '48px',
				},
			],
		}
	};
}
