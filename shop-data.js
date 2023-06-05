const SHOP_DATA = [
    {
      title: 'Outer',
      items: [
        {
          id: 1,
          name: 'Blue Cotton Jacket',
          imageUrl: 'https://firebasestorage.googleapis.com/v0/b/anc-project-93a41.appspot.com/o/img_JacketBlue_1.jpg?alt=media&token=0d11bcee-62c2-4ab5-a543-6569d935bfec',
          imageUrlHover: 'https://firebasestorage.googleapis.com/v0/b/anc-project-93a41.appspot.com/o/img_JacketBlue_2.jpg?alt=media&token=5a9a24e5-e120-4744-8dd2-3e8f6353f004',
          price: 65,
          size: ['S', 'M', 'L'],
          isNew: true,
          isLiked: false,
          type: 'outer',
          color: '#3A4750',
        },
        {
          id: 2,
          name: 'Denim Jacket',
          imageUrl: 'https://firebasestorage.googleapis.com/v0/b/anc-project-93a41.appspot.com/o/img_JacketJean_1.jpg?alt=media&token=e7ef7c52-9b2f-4ef6-b30c-cd95e5c8bba8',
          imageUrlHover: 'https://firebasestorage.googleapis.com/v0/b/anc-project-93a41.appspot.com/o/img_JacketJean_2.jpg?alt=media&token=bac2167d-d4aa-4fbd-be21-187b4902e1ab',
          price: 120,
          size: ['S', 'M', 'L'],
          isNew: true,
          isLiked: false,
          type: 'outer',
          color: '#407DA4',
        },
        {
          id: 3,
          name: 'Cookie & Cream Jacket',
          imageUrl: 'https://firebasestorage.googleapis.com/v0/b/anc-project-93a41.appspot.com/o/img_CreamJacket_1.jpg?alt=media&token=32956169-c73a-4dc7-ac33-e78f4e499f0f',
          imageUrlHover: 'https://firebasestorage.googleapis.com/v0/b/anc-project-93a41.appspot.com/o/img_CreamJacket_2.jpg?alt=media&token=3c65c3d9-7da6-4b6c-8a6e-bb14aa839de2',
          price: 85,
          size: ['S', 'M', 'L'],
          isNew: false,
          isLiked: false,
          type: 'outer',
          color: '#B8A89E',
        },
        {
          id: 4,
          name: 'Cotton Pocket Jacket',
          imageUrl: 'https://firebasestorage.googleapis.com/v0/b/anc-project-93a41.appspot.com/o/img_JacketCotton_1.jpg?alt=media&token=2a491704-f1d9-406e-8f29-e7cb6f345eef',
          imageUrlHover: 'https://firebasestorage.googleapis.com/v0/b/anc-project-93a41.appspot.com/o/img_JacketCotton_2.jpg?alt=media&token=f0af9a26-b421-48f7-b319-2efe5638efd0',
          price: 95,
          size: ['S', 'M', 'L'],
          isNew: false,
          isLiked: false,
          type: 'outer',
          color: '#BBB9BC',
        },
        {
          id: 5,
          name: 'Goose Down Jacket',
          imageUrl: 'https://firebasestorage.googleapis.com/v0/b/anc-project-93a41.appspot.com/o/img_JacketGoose_1.jpg?alt=media&token=870f8fc5-0646-412f-a11d-d318f99e8f4f',
          imageUrlHover: 'https://firebasestorage.googleapis.com/v0/b/anc-project-93a41.appspot.com/o/img_JacketGoose_2.jpg?alt=media&token=feed3449-6095-4c3b-ae61-3b1802ee6ec5',
          price: 220,
          size: ['S', 'M', 'L'],
          isNew: false,
          isLiked: false,
          type: 'outer',
          color: '#D5C4BA',
        },
        {
          id: 6,
          name: 'Light Down Jacket',
          imageUrl: 'https://firebasestorage.googleapis.com/v0/b/anc-project-93a41.appspot.com/o/img_JacketLight_1.jpg?alt=media&token=70ca6135-b522-4ced-9293-bbd5cba352a7',
          imageUrlHover: 'https://firebasestorage.googleapis.com/v0/b/anc-project-93a41.appspot.com/o/img_JacketLight_2.jpg?alt=media&token=8df8b44d-27ae-42fe-9a50-44291e6652e2',
          price: 120,
          size: ['S', 'M', 'L'],
          isNew: false,
          isLiked: false,
          type: 'outer',
          color: '#746442',
        },
      ],
    },
    {
      title: 'Knit',
      items: [
        {
          id: 7,
          name: 'Bluish Green Knit',
          imageUrl: 'https://firebasestorage.googleapis.com/v0/b/anc-project-93a41.appspot.com/o/img_KnitGreen_1.jpg?alt=media&token=7d835341-6af5-4669-94fc-637eece6ded1',
          imageUrlHover: 'https://firebasestorage.googleapis.com/v0/b/anc-project-93a41.appspot.com/o/img_KnitGreen_2.jpg?alt=media&token=ea07fe80-4f98-41da-bf30-5f3bb8eba4ea',
          price: 80,
          size: ['S', 'M', 'L'],
          isNew: true,
          isLiked: false,
          type: 'knit',
          color: '#395162',
        },
        {
          id: 8,
          name: 'Ivory Knit Vest',
          imageUrl: 'https://firebasestorage.googleapis.com/v0/b/anc-project-93a41.appspot.com/o/img_KnitIvory_1.jpg?alt=media&token=c05abbd3-8412-43bc-86b6-24e2ffef0ca3',
          imageUrlHover: 'https://firebasestorage.googleapis.com/v0/b/anc-project-93a41.appspot.com/o/img_KnitIvory_2.jpg?alt=media&token=a0ed2593-65c5-498d-ad5c-3e530c1ea9d6',
          price: 45,
          size: ['S', 'M', 'L'],
          isNew: true,
          isLiked: false,
          type: 'knit',
          color: '#ABA79F',
        },
        {
          id: 9,
          name: 'Black Waffle Knit',
          imageUrl: 'https://firebasestorage.googleapis.com/v0/b/anc-project-93a41.appspot.com/o/img_KnitBlack_1.jpg?alt=media&token=a920e8c6-5b78-4aec-9aed-f21811a8bebb',
          imageUrlHover: 'https://firebasestorage.googleapis.com/v0/b/anc-project-93a41.appspot.com/o/img_KnitBlack_2.jpg?alt=media&token=f8cd9d84-b61f-465e-ab00-8c3c951d0b46',
          price: 90,
          size: ['S', 'M', 'L'],
          isNew: false,
          isLiked: false,
          type: 'knit',
          color: '#2A2C38',
        },
        {
          id: 10,
          name: 'Blue Knit',
          imageUrl: 'https://firebasestorage.googleapis.com/v0/b/anc-project-93a41.appspot.com/o/img_KnitBlue_1.jpg?alt=media&token=d1c98dd2-9936-4676-ba9f-f147d7ceb37a',
          imageUrlHover: 'https://firebasestorage.googleapis.com/v0/b/anc-project-93a41.appspot.com/o/img_KnitBlue_2.jpg?alt=media&token=b1b9d51e-73a6-4ff9-8ea0-87984aac5634',
          price: 90,
          size: ['S', 'M', 'L'],
          isNew: false,
          isLiked: false,
          type: 'knit',
          color: '#3A63A3',
        },
      ],
    },
    {
        title: 'Top',
        items: [
        {
        id: 11,
        name: 'Corduroy Khaki Shirt',
        imageUrl: 'https://firebasestorage.googleapis.com/v0/b/anc-project-93a41.appspot.com/o/img_KakiShirt_1.jpg?alt=media&token=4d414b67-26b6-40b0-aa35-7bb5cfbb9188',
        imageUrlHover: 'https://firebasestorage.googleapis.com/v0/b/anc-project-93a41.appspot.com/o/img_KakiShirt_2.jpg?alt=media&token=4e3438ca-39c8-43a5-8524-c32e3616be4e',
        price: 70,
        size: ['S', 'M', 'L'],
        isNew: true,
        isLiked: false,
        type: 'top',
        color: '#607463',
        },
        {
          id: 12,
          name: 'Black Cotton Shirt',
          imageUrl: 'https://firebasestorage.googleapis.com/v0/b/anc-project-93a41.appspot.com/o/img_BlackTop_1.jpg?alt=media&token=4863a3a4-8f16-440a-8bbb-cfad3ef566ef',
          imageUrlHover: 'https://firebasestorage.googleapis.com/v0/b/anc-project-93a41.appspot.com/o/img_BlackTop_2.jpg?alt=media&token=bcebb486-cf56-4580-80b8-0c3a7b75ee54',
          price: 60,
          size: ['S', 'M', 'L'],
          isNew: true,
          isLiked: false,
          type: 'top',
          color: '#15161A',
        },
        {
          id: 13,
          name: 'Sky Sweatshirt',
          imageUrl: 'https://firebasestorage.googleapis.com/v0/b/anc-project-93a41.appspot.com/o/img_SkyShirt_1.jpg?alt=media&token=b51c524e-73af-4cd0-858b-e084dabf9c1c',
          imageUrlHover: 'https://firebasestorage.googleapis.com/v0/b/anc-project-93a41.appspot.com/o/img_SkyShirt_2.jpg?alt=media&token=ec941211-3e06-459e-9902-04a85dafec4e',
          price: 35,
          size: ['S', 'M', 'L'],
          isNew: false,
          isLiked: false,
          type: 'top',
          color: '#C3C6D5',
        },
        {
          id: 14,
          name: 'Purple Hoodie',
          imageUrl: 'https://firebasestorage.googleapis.com/v0/b/anc-project-93a41.appspot.com/o/img_PurpleHoodie_1.jpg?alt=media&token=ca2f64ff-a2c6-48a0-8673-da5219ceda84',
          imageUrlHover: 'https://firebasestorage.googleapis.com/v0/b/anc-project-93a41.appspot.com/o/img_PurpleHoodie_2.jpg?alt=media&token=1dc07419-ac1c-4139-85b0-1ae2e95a476d',
          price: 40,
          size: ['S', 'M', 'L'],
          isNew: false,
          isLiked: false,
          type: 'top',
          color: '#AB92BA',
        },
        {
          id: 15,
          name: 'Black Hoodie',
          imageUrl: 'https://firebasestorage.googleapis.com/v0/b/anc-project-93a41.appspot.com/o/img_HoodieBlack_1.jpg?alt=media&token=4a61a456-cc52-4ad3-8612-d1b01e096515',
          imageUrlHover: 'https://firebasestorage.googleapis.com/v0/b/anc-project-93a41.appspot.com/o/img_HoodieBlack_2.jpg?alt=media&token=7df6c6ad-b3cd-4ed6-826f-0ee05442c444',
          price: 40,
          size: ['S', 'M', 'L'],
          isNew: false,
          isLiked: false,
          type: 'top',
          color: '#0B0A0F',
        },
        {
          id: 16,
          name: 'Gray Hoodie',
          imageUrl: 'https://firebasestorage.googleapis.com/v0/b/anc-project-93a41.appspot.com/o/img_HoodieGray_1.jpg?alt=media&token=6fe1c2f5-eb5e-4852-85f2-f41a53e812e0',
          imageUrlHover: 'https://firebasestorage.googleapis.com/v0/b/anc-project-93a41.appspot.com/o/img_HoodieGray_2.jpg?alt=media&token=ed6474e0-1d4c-4d33-bd0f-ff05b68a2e85',
          price: 40,
          size: ['S', 'M', 'L'],
          isNew: false,
          isLiked: false,
          type: 'top',
          color: '#C8C6CA',
        },
      ],
    },
    {
      title: 'Bottom',
      items: [
        {
        id: 17,
        name: 'Corduroy Cream Pants',
        imageUrl: 'https://firebasestorage.googleapis.com/v0/b/anc-project-93a41.appspot.com/o/img_CreamPant_1.jpg?alt=media&token=e4bd1efb-2333-4105-91d5-98453052110b',
        imageUrlHover: 'https://firebasestorage.googleapis.com/v0/b/anc-project-93a41.appspot.com/o/img_CreamPant_2.jpg?alt=media&token=75fdab42-7146-4af7-83a8-0b9c8f5f8df2',
        price: 75,
        size: [30, 32, 34, 36],
        isNew: true,
        isLiked: false,
        type: 'bottom',
        color: '#CEC1B9',
        },
        {
          id: 18,
          name: 'Beige Cotton Pants',
          imageUrl: 'https://firebasestorage.googleapis.com/v0/b/anc-project-93a41.appspot.com/o/img_BeigePant_1.jpg?alt=media&token=61aa519b-bfff-456d-8179-3023ae291b11',
          imageUrlHover: 'https://firebasestorage.googleapis.com/v0/b/anc-project-93a41.appspot.com/o/img_BeigePant_2.jpg?alt=media&token=1e334a2b-c378-4faa-9542-5c7c084fcf2e',
          price: 65,
          size: [30, 32, 34, 36],
          isNew: false,
          isLiked: false,
          type: 'bottom',
          color: '#BB9D80',
        },
        {
          id: 19,
          name: 'Black Slacks',
          imageUrl: 'https://firebasestorage.googleapis.com/v0/b/anc-project-93a41.appspot.com/o/img_BlackSlack_1.jpg?alt=media&token=6b1600bf-ef3d-4180-8f0b-3373ffcdaea3',
          imageUrlHover: 'https://firebasestorage.googleapis.com/v0/b/anc-project-93a41.appspot.com/o/img_BlackSlack_2.jpg?alt=media&token=e95c7fbd-c38d-4a29-95f2-8e781ef49e27',
          price: 55,
          size: [30, 32, 34, 36],
          isNew: false,
          isLiked: false,
          type: 'bottom',
          color: '#221E1D',
        },
      ],
    },
    {
      title: 'Acc',
      items: [
        {
          id: 20,
          name: 'Bold Glasses',
          imageUrl: 'https://firebasestorage.googleapis.com/v0/b/anc-project-93a41.appspot.com/o/img_BoldGlase_1.jpg?alt=media&token=c0f9fdbd-7111-47a5-a89c-05d9eb1a2bfd',
          imageUrlHover: 'https://firebasestorage.googleapis.com/v0/b/anc-project-93a41.appspot.com/o/img_BoldGlase_2.jpg?alt=media&token=7ab1e4ac-d148-44b1-8876-b42092946e4d',
          price: 25,
          size: [],
          isNew: true,
          isLiked: false,
          type: 'acc',
          color: '#3E332D',
        },
        {
          id: 21,
          name: 'Wood Glasses',
          imageUrl: 'https://firebasestorage.googleapis.com/v0/b/anc-project-93a41.appspot.com/o/img_WoodGlasse_1.jpg?alt=media&token=dfea43e2-78b9-467f-b86e-da87747514bf',
          imageUrlHover: 'https://firebasestorage.googleapis.com/v0/b/anc-project-93a41.appspot.com/o/img_WoodGlasse_2.jpg?alt=media&token=a55d4715-4379-4722-8de6-ceb13144d2a7',
          price: 25,
          size: [],
          isNew: true,
          isLiked: false,
          type: 'acc',
          color: '#CD9E7B',
        },
        {
          id: 22,
          name: 'Navy Hat',
          imageUrl: 'https://firebasestorage.googleapis.com/v0/b/anc-project-93a41.appspot.com/o/img_Hat_1.jpg?alt=media&token=d662c1d6-6324-450c-8120-fc2b343f7fe4',
          imageUrlHover: 'https://firebasestorage.googleapis.com/v0/b/anc-project-93a41.appspot.com/o/img_Hat_2.jpg?alt=media&token=9fb22840-465b-4ae9-9b7f-c268203f4b5a',
          price: 35,
          size: ['S', 'M'],
          isNew: false,
          isLiked: false,
          type: 'acc',
          color: '#46506D',
        },
        {
          id: 23,
          name: 'Corduroy Short Beanie',
          imageUrl: 'https://firebasestorage.googleapis.com/v0/b/anc-project-93a41.appspot.com/o/img_Beanie_1.jpg?alt=media&token=dbf59d96-414e-4644-8aa4-1c317a6818d4',
          imageUrlHover: 'https://firebasestorage.googleapis.com/v0/b/anc-project-93a41.appspot.com/o/img_Beanie_2.jpg?alt=media&token=79794340-f8ad-4add-b3c9-292394f27490',
          price: 35,
          size: ['S', 'M'],
          isNew: false,
          isLiked: false,
          type: 'acc',
          color: '#746E58',
        },
        {
          id: 24,
          name: 'Black Loafer',
          imageUrl: 'https://firebasestorage.googleapis.com/v0/b/anc-project-93a41.appspot.com/o/img_BlackLoafer_1.jpg?alt=media&token=f0f9381a-4957-46b1-a95a-35c75fc1c3cf',
          imageUrlHover: 'https://firebasestorage.googleapis.com/v0/b/anc-project-93a41.appspot.com/o/img_BlackLoafer_2.jpg?alt=media&token=62f1c53d-ca37-42cf-b836-0d87380327c6',
          price: 60,
          size: [10,11,12],
          isNew: false,
          isLiked: false,
          type: 'acc',
          color: '#0E0D0B',
        },
      ],
    },
  ];

export default SHOP_DATA;

export const isNewData = [
  {
    title: 'new',
      items: [
        {
          id: 1,
          name: 'Blue Cotton Jacket',
          imageUrl: 'https://firebasestorage.googleapis.com/v0/b/anc-project-93a41.appspot.com/o/img_JacketBlue_1.jpg?alt=media&token=0d11bcee-62c2-4ab5-a543-6569d935bfec',
          imageUrlHover: 'https://firebasestorage.googleapis.com/v0/b/anc-project-93a41.appspot.com/o/img_JacketBlue_2.jpg?alt=media&token=5a9a24e5-e120-4744-8dd2-3e8f6353f004',
          price: 65,
          size: ['S', 'M', 'L'],
          isNew: true,
          isLiked: false,
          type: 'outer',
          color: '#3A4750',
        },
        {
          id: 2,
          name: 'Denim Jacket',
          imageUrl: 'https://firebasestorage.googleapis.com/v0/b/anc-project-93a41.appspot.com/o/img_JacketJean_1.jpg?alt=media&token=e7ef7c52-9b2f-4ef6-b30c-cd95e5c8bba8',
          imageUrlHover: 'https://firebasestorage.googleapis.com/v0/b/anc-project-93a41.appspot.com/o/img_JacketJean_2.jpg?alt=media&token=bac2167d-d4aa-4fbd-be21-187b4902e1ab',
          price: 120,
          size: ['S', 'M', 'L'],
          isNew: true,
          isLiked: false,
          type: 'outer',
          color: '#407DA4',
        },
        {
          id: 7,
          name: 'Bluish Green Knit',
          imageUrl: 'https://firebasestorage.googleapis.com/v0/b/anc-project-93a41.appspot.com/o/img_KnitGreen_1.jpg?alt=media&token=7d835341-6af5-4669-94fc-637eece6ded1',
          imageUrlHover: 'https://firebasestorage.googleapis.com/v0/b/anc-project-93a41.appspot.com/o/img_KnitGreen_2.jpg?alt=media&token=ea07fe80-4f98-41da-bf30-5f3bb8eba4ea',
          price: 80,
          size: ['S', 'M', 'L'],
          isNew: true,
          isLiked: false,
          type: 'knit',
          color: '#395162',
        },
        {
          id: 8,
          name: 'Ivory Knit Vest',
          imageUrl: 'https://firebasestorage.googleapis.com/v0/b/anc-project-93a41.appspot.com/o/img_KnitIvory_1.jpg?alt=media&token=c05abbd3-8412-43bc-86b6-24e2ffef0ca3',
          imageUrlHover: 'https://firebasestorage.googleapis.com/v0/b/anc-project-93a41.appspot.com/o/img_KnitIvory_2.jpg?alt=media&token=a0ed2593-65c5-498d-ad5c-3e530c1ea9d6',
          price: 45,
          size: ['S', 'M', 'L'],
          isNew: true,
          isLiked: false,
          type: 'knit',
          color: '#ABA79F',
        },
        {
          id: 11,
          name: 'Corduroy Khaki Shirt',
          imageUrl: 'https://firebasestorage.googleapis.com/v0/b/anc-project-93a41.appspot.com/o/img_KakiShirt_1.jpg?alt=media&token=4d414b67-26b6-40b0-aa35-7bb5cfbb9188',
          imageUrlHover: 'https://firebasestorage.googleapis.com/v0/b/anc-project-93a41.appspot.com/o/img_KakiShirt_2.jpg?alt=media&token=4e3438ca-39c8-43a5-8524-c32e3616be4e',
          price: 70,
          size: ['S', 'M', 'L'],
          isNew: true,
          isLiked: false,
          type: 'top',
          color: '#607463',
          },
          {
            id: 12,
            name: 'Black Cotton Shirt',
            imageUrl: 'https://firebasestorage.googleapis.com/v0/b/anc-project-93a41.appspot.com/o/img_BlackTop_1.jpg?alt=media&token=4863a3a4-8f16-440a-8bbb-cfad3ef566ef',
            imageUrlHover: 'https://firebasestorage.googleapis.com/v0/b/anc-project-93a41.appspot.com/o/img_BlackTop_2.jpg?alt=media&token=bcebb486-cf56-4580-80b8-0c3a7b75ee54',
            price: 60,
            size: ['S', 'M', 'L'],
            isNew: true,
            isLiked: false,
            type: 'top',
            color: '#15161A',
          },
          {
            id: 17,
            name: 'Corduroy Cream Pants',
            imageUrl: 'https://firebasestorage.googleapis.com/v0/b/anc-project-93a41.appspot.com/o/img_CreamPant_1.jpg?alt=media&token=e4bd1efb-2333-4105-91d5-98453052110b',
            imageUrlHover: 'https://firebasestorage.googleapis.com/v0/b/anc-project-93a41.appspot.com/o/img_CreamPant_2.jpg?alt=media&token=75fdab42-7146-4af7-83a8-0b9c8f5f8df2',
            price: 75,
            size: [30, 32, 34, 36],
            isNew: true,
            isLiked: false,
            type: 'bottom',
            color: '#CEC1B9',
            },
            {
              id: 20,
              name: 'Bold Glasses',
              imageUrl: 'https://firebasestorage.googleapis.com/v0/b/anc-project-93a41.appspot.com/o/img_BoldGlase_1.jpg?alt=media&token=c0f9fdbd-7111-47a5-a89c-05d9eb1a2bfd',
              imageUrlHover: 'https://firebasestorage.googleapis.com/v0/b/anc-project-93a41.appspot.com/o/img_BoldGlase_2.jpg?alt=media&token=7ab1e4ac-d148-44b1-8876-b42092946e4d',
              price: 25,
              size: [],
              isNew: true,
              isLiked: false,
              type: 'acc',
              color: '#3E332D',
            },
            {
              id: 21,
              name: 'Wood Glasses',
              imageUrl: 'https://firebasestorage.googleapis.com/v0/b/anc-project-93a41.appspot.com/o/img_WoodGlasse_1.jpg?alt=media&token=dfea43e2-78b9-467f-b86e-da87747514bf',
              imageUrlHover: 'https://firebasestorage.googleapis.com/v0/b/anc-project-93a41.appspot.com/o/img_WoodGlasse_2.jpg?alt=media&token=a55d4715-4379-4722-8de6-ceb13144d2a7',
              price: 25,
              size: [],
              isNew: true,
              isLiked: false,
              type: 'acc',
              color: '#CD9E7B',
            },
      ]    
  }
]

export const LOOKBOOK_DATA = [
  {
    title: 'lookbook',
    items: [
      {
        id: 1,
        imageUrl: 'https://firebasestorage.googleapis.com/v0/b/anc-project-93a41.appspot.com/o/look_1.jpg?alt=media&token=832238df-8d92-478e-8af3-b28eb08f231c&_gl=1*molyol*_ga*MjI2NTU4NzIuMTY4MTY4MjcxNw..*_ga_CW55HF8NVT*MTY4NTYyOTcyMy4xMi4xLjE2ODU2MzAxMzcuMC4wLjA.',
        ratio: '4/3',
        column: '1/8',
        breakColumn: '1/12',
      },
      {
        id: 2,
        imageUrl: 'https://firebasestorage.googleapis.com/v0/b/anc-project-93a41.appspot.com/o/look_2.jpg?alt=media&token=d853d62b-d8c1-456c-9e89-482493eaabc4&_gl=1*wcvd43*_ga*MjI2NTU4NzIuMTY4MTY4MjcxNw..*_ga_CW55HF8NVT*MTY4NTYyOTcyMy4xMi4xLjE2ODU2MzEyMjEuMC4wLjA.',
        ratio: '1/1.38',
        column: '7/-1',
        breakColumn: '2/-1',
      },
      {
        id: 3,
        imageUrl: 'https://firebasestorage.googleapis.com/v0/b/anc-project-93a41.appspot.com/o/img_BlackTop_1.jpg?alt=media&token=4863a3a4-8f16-440a-8bbb-cfad3ef566ef&_gl=1*18ir20i*_ga*MjI2NTU4NzIuMTY4MTY4MjcxNw..*_ga_CW55HF8NVT*MTY4NTYyOTcyMy4xMi4xLjE2ODU2MzEyMDEuMC4wLjA.',
        ratio: '0.69/1',
        column: '1/5',
        breakColumn: '1/12',
      },
      {
        id: 4,
        imageUrl: 'https://firebasestorage.googleapis.com/v0/b/anc-project-93a41.appspot.com/o/img_BlackTop_2.jpg?alt=media&token=bcebb486-cf56-4580-80b8-0c3a7b75ee54&_gl=1*1eml9mo*_ga*MjI2NTU4NzIuMTY4MTY4MjcxNw..*_ga_CW55HF8NVT*MTY4NTYyOTcyMy4xMi4xLjE2ODU2MzExODUuMC4wLjA.',
        ratio: '0.69/1',
        column: '5/9',
        breakColumn: '3/-1',
      },
      {
        id: 5,
        imageUrl: 'https://firebasestorage.googleapis.com/v0/b/anc-project-93a41.appspot.com/o/look_5.jpg?alt=media&token=b059302a-5044-4958-82b0-78875a4afc6e&_gl=1*n9d6pn*_ga*MjI2NTU4NzIuMTY4MTY4MjcxNw..*_ga_CW55HF8NVT*MTY4NTYyOTcyMy4xMi4xLjE2ODU2MzExNDYuMC4wLjA.',
        ratio: '16/9',
        column: '1/-1',
        breakColumn: '1/-1',
      },
      {
        id: 6,
        imageUrl: 'https://firebasestorage.googleapis.com/v0/b/anc-project-93a41.appspot.com/o/look_6.jpg?alt=media&token=7feac282-499c-479b-ac6f-dd5f68bac073&_gl=1*1urkc9m*_ga*MjI2NTU4NzIuMTY4MTY4MjcxNw..*_ga_CW55HF8NVT*MTY4NTYyOTcyMy4xMi4xLjE2ODU2MzExMjYuMC4wLjA.',
        ratio: '3/4',
        column: '1/5',
        breakColumn: '3/-1',
      },
      {
        id: 7,
        imageUrl: 'https://firebasestorage.googleapis.com/v0/b/anc-project-93a41.appspot.com/o/img_KakiShirt_1.jpg?alt=media&token=4d414b67-26b6-40b0-aa35-7bb5cfbb9188&_gl=1*14mf1o5*_ga*MjI2NTU4NzIuMTY4MTY4MjcxNw..*_ga_CW55HF8NVT*MTY4NTYyOTcyMy4xMi4xLjE2ODU2MzEwOTcuMC4wLjA.',
        ratio: '3/4',
        column: '9/-1',
        breakColumn: '1/11',
      },
      {
        id: 8,
        imageUrl: 'https://firebasestorage.googleapis.com/v0/b/anc-project-93a41.appspot.com/o/img_KnitGreen_1.jpg?alt=media&token=7d835341-6af5-4669-94fc-637eece6ded1&_gl=1*1ifj4*_ga*MjI2NTU4NzIuMTY4MTY4MjcxNw..*_ga_CW55HF8NVT*MTY4NTYyOTcyMy4xMi4xLjE2ODU2MzEwNTguMC4wLjA.',
        ratio: '3/4',
        column: '5/9',
        breakColumn: '1/-1',
      },
      {
        id: 9,
        imageUrl: 'https://firebasestorage.googleapis.com/v0/b/anc-project-93a41.appspot.com/o/img_KnitGreen_2.jpg?alt=media&token=ea07fe80-4f98-41da-bf30-5f3bb8eba4ea&_gl=1*18544aq*_ga*MjI2NTU4NzIuMTY4MTY4MjcxNw..*_ga_CW55HF8NVT*MTY4NTYyOTcyMy4xMi4xLjE2ODU2MzEwMzMuMC4wLjA.',
        ratio: '3/4',
        column: '9/-1',
        breakColumn: '3/-1',
      },
      {
        id: 10,
        imageUrl: 'https://firebasestorage.googleapis.com/v0/b/anc-project-93a41.appspot.com/o/look_10.jpg?alt=media&token=82d3fd56-4e0e-4b25-b853-335906453466&_gl=1*x3l86q*_ga*MjI2NTU4NzIuMTY4MTY4MjcxNw..*_ga_CW55HF8NVT*MTY4NTYyOTcyMy4xMi4xLjE2ODU2MzA5NTAuMC4wLjA.',
        ratio: '16/9',
        column: '1/-1',
        breakColumn: '1/-1',
      },
      {
        id: 11,
        imageUrl: 'https://firebasestorage.googleapis.com/v0/b/anc-project-93a41.appspot.com/o/img_JacketJean_2.jpg?alt=media&token=bac2167d-d4aa-4fbd-be21-187b4902e1ab&_gl=1*1c19n0*_ga*MjI2NTU4NzIuMTY4MTY4MjcxNw..*_ga_CW55HF8NVT*MTY4NTYyOTcyMy4xMi4xLjE2ODU2MzA5MjMuMC4wLjA.',
        ratio: '0.72/1',
        column: '1/7',
        breakColumn: '1/11',
      },
      {
        id: 12,
        imageUrl: 'https://firebasestorage.googleapis.com/v0/b/anc-project-93a41.appspot.com/o/img_JacketJean_1.jpg?alt=media&token=e7ef7c52-9b2f-4ef6-b30c-cd95e5c8bba8&_gl=1*1p2k0ip*_ga*MjI2NTU4NzIuMTY4MTY4MjcxNw..*_ga_CW55HF8NVT*MTY4NTYyOTcyMy4xMi4xLjE2ODU2MzA4ODQuMC4wLjA.',
        ratio: '0.72/1',
        column: '7/-1',
        breakColumn: '3/-1',
      },
      {
        id: 13,
        imageUrl: 'https://firebasestorage.googleapis.com/v0/b/anc-project-93a41.appspot.com/o/look_13.jpg?alt=media&token=09dc3527-fe6a-4b05-8c2c-98a68fd9e75b&_gl=1*1c8gwek*_ga*MjI2NTU4NzIuMTY4MTY4MjcxNw..*_ga_CW55HF8NVT*MTY4NTYyOTcyMy4xMi4xLjE2ODU2MzA4NTIuMC4wLjA.',
        ratio: '0.69/1',
        column: '3/11',
        breakColumn: '1/-1',
      },
    ]

  }
]