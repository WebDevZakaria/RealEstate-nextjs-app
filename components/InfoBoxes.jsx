import InfoBox from "./infoBox"

const InfoBoxes = () => {

  return (
    <section>
      <div className="container-xl lg:container m-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
       
      <InfoBox 
      heading = 'للمستأجرين'
      backgroundColor = 'bg-gray-100'
      buttonInfo = {{
        text:'تصفح العقارات',
        link:'/properties',
        backgroundColor:'bg-black'
      }}
       >
ابحث عن موقع حجز العقارات الذي تحلم به واتصل بالمالك.

       </InfoBox>

       <InfoBox 
      heading = 'لأصحاب العقارات'
      backgroundColor = 'bg-purple-100'
      buttonInfo = {{
        text:'إضافة عقارك',
        link:'/properties/add',
        backgroundColor:'bg-purple-500'
      }}
       >

أدرج منزلك وتواصل مع العميل المحتمل
       </InfoBox>

        </div>
      </div>
    </section>
  )
}

export default InfoBoxes
