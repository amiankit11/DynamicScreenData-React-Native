const dynamicDataArray = [
  {
    component_type: 'IMAGE_WITH_TEXT',
    data: [
      { id: 1, label: 'Item 1', image: 'https://www.kasandbox.org/programming-images/avatars/primosaur-ultimate.png' },
      { id: 2, label: 'Item 2', image: 'https://www.kasandbox.org/programming-images/avatars/orange-juice-squid.png' },
      { id: 3, label: 'Item 3', image: 'https://www.kasandbox.org/programming-images/avatars/primosaur-ultimate.png' },
      { id: 4, label: 'Item 4', image: 'https://www.kasandbox.org/programming-images/avatars/orange-juice-squid.png' },
      { id: 5, label: 'Item 5', image: 'https://www.kasandbox.org/programming-images/avatars/primosaur-ultimate.png' },
      { id: 6, label: 'Item 6', image: 'https://www.kasandbox.org/programming-images/avatars/orange-juice-squid.png' },
    ],
  },
  {
    component_type: 'CAROUSEL_VIEW',
    data: [
      { id: 1, label: 'Item 1', image: 'https://via.placeholder.com/300/09f/fff.png' },
      { id: 2, label: 'Item 2', image: 'https://www.gstatic.com/webp/gallery3/1.sm.png' },
    ],
  },
  {
    component_type: 'TAB_WITH_IMAGE',
    data: [
      {
        background_image_source: 'https://source.unsplash.com/user/c_v_r/1900×800',
        items: {
          component_type: 'IMAGE_WITH_TEXT',
          data: [
            { id: 1, label: 'Item 1', image: 'https://www.kasandbox.org/programming-images/avatars/primosaur-ultimate.png' },
            { id: 2, label: 'Item 2', image: 'https://www.kasandbox.org/programming-images/avatars/orange-juice-squid.png' },
            { id: 3, label: 'Item 3', image: 'https://www.kasandbox.org/programming-images/avatars/primosaur-ultimate.png' },
            { id: 4, label: 'Item 4', image: 'https://www.kasandbox.org/programming-images/avatars/orange-juice-squid.png' },
            { id: 5, label: 'Item 5', image: 'https://www.kasandbox.org/programming-images/avatars/primosaur-ultimate.png' },
            { id: 6, label: 'Item 6', image: 'https://www.kasandbox.org/programming-images/avatars/orange-juice-squid.png' },
          ],
        },
        id:1,
        label: 'Tab 1',
      },{
        background_image_source: 'https://source.unsplash.com/user/c_v_r/1900×800',
         items: {
          component_type: 'IMAGE_WITH_TEXT',
          data: [
            { id: 1, label: 'Label 1', image: 'https://www.kasandbox.org/programming-images/avatars/mr-pants.png' },
            { id: 2, label: 'Label 2', image: 'https://www.kasandbox.org/programming-images/avatars/orange-juice-squid.png' },
          ],
        },
        id:2,
        label: 'Tab 2',
      }
    ],
  }
];

export default dynamicDataArray;
