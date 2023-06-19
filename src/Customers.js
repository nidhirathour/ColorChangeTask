const jsonString = `{
    "data": [{
            "id": "0007f402-e569-444c-8bf0-86a38833924e",
            "name": "pushpendra yadav",
            "status": true,
            "type": "b2c",
            "created_at": "2021-09-22T10:26:30.000000Z"
        },
        {
            "id": "0062d2c5-a54f-4089-9d07-883a2931b3cb",
            "name": "Ankush Pal",
            "status": true,
            "type": "b2c",
            "created_at": "2020-11-24T06:32:56.000000Z"
        },
        {
            "id": "0064ce25-7d8c-42fc-b91a-1c79435d6b29",
            "name": "Akhlesh Kumar",
            "status": true,
            "type": "b2c",
            "created_at": "2021-10-31T07:56:39.000000Z"
        },
        {
            "id": "006886eb-ba3f-47f8-a1d4-0e605618fc8b",
            "name": "Aakash Jaat",
            "status": true,
            "type": "b2c",
            "created_at": "2022-02-09T12:52:42.000000Z"
        },
        {
            "id": "0092cc80-da53-428b-a0cb-45c7f31e4d2f",
            "name": "Rahul Kumar",
            "status": true,
            "type": "b2c",
            "created_at": "2022-03-08T04:59:34.000000Z"
        },
        {
            "id": "009e8879-18df-45d0-a7e6-fae430d15dee",
            "name": "Sobha Sobha",
            "status": true,
            "type": "b2c",
            "created_at": "2021-03-19T08:13:55.000000Z"
        },
        {
            "id": "00b2394b-74d5-4346-ac4c-9756b0e1762c",
            "name": "Sidheshwar Singh",
            "status": true,
            "type": "b2c",
            "created_at": "2021-05-28T11:15:44.000000Z"
        },
        {
            "id": "00fba949-7a16-469c-8f9a-70757a2f389d",
            "name": "Abesh null",
            "status": true,
            "type": "b2b",
            "created_at": "2022-10-19T12:12:25.000000Z"
        },
        {
            "id": "0108c253-5938-4092-a2f7-69ca89cf5b8e",
            "name": "Rajender Yadav",
            "status": true,
            "type": "b2c",
            "created_at": "2022-03-10T13:18:52.000000Z"
        },
        {
            "id": "01094e6d-73ab-4cd1-aa4e-f54ebbd1d0c5",
            "name": "hemant null",
            "status": true,
            "type": "b2c",
            "created_at": "2023-03-08T04:15:09.000000Z"
        },
        {
            "id": "01170547-d29d-4423-9d0d-a9d5e0d66343",
            "name": "Rahul Malviya",
            "status": true,
            "type": "b2b",
            "created_at": "2021-10-23T06:28:17.000000Z"
        },
        {
            "id": "0117f11f-b69c-49cd-96b1-cc0f000c99a4",
            "name": "Chandra Kant",
            "status": true,
            "type": "b2c",
            "created_at": "2022-02-25T06:15:35.000000Z"
        },
        {
            "id": "012775dc-236f-48b4-97b0-c9f0898f6f31",
            "name": "Keshav Kumar",
            "status": true,
            "type": "b2c",
            "created_at": "2022-03-07T12:27:18.000000Z"
        },
        {
            "id": "01337608-d1e2-48dd-86ea-63fc4718d462",
            "name": "Shivani Bedi",
            "status": true,
            "type": "b2c",
            "created_at": "2021-05-14T06:49:51.000000Z"
        },
        {
            "id": "01392724-bde7-4a5b-a2a0-db41bc3e0273",
            "name": "bilash null",
            "status": true,
            "type": "b2c",
            "created_at": "2020-12-17T12:52:54.000000Z"
        }
    ]
}`

const data = JSON.parse(jsonString);
export const customersData = data.data;

console.log(customersData);