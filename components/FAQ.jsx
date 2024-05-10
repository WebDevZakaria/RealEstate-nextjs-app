import React from 'react'

const FAQ = () => {
  return (
    <section className="dark:bg-gray-800 dark:text-gray-100">
	<div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
		<h2 className="text-2xl font-semibold sm:text-4xl">الأسئلة الشائعة وإجاباتها للموقع :</h2>
		<p className="mt-4 mb-8 dark:text-gray-400">الأسئلة الشائعة وإجاباتها لموقع تأجير العقارات:</p>
		<div className="space-y-4">
			<details className="w-full border rounded-lg">
				<summary className="px-4 py-6 focus:outline-none focus-visible:ri font-semibold">كيف يمكنني العثور على عقار للإيجار على الموقع؟</summary>
				<br />
				<p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">يمكنك البحث عن العقارات المتاحة عن طريق استخدام محرك البحث الموجود على الموقع. يمكنك تحديد الموقع، ونوع العقار، وغيرها من المعايير لتضييق نطاق البحث والعثور على العقار الذي يناسب احتياجاتك.</p>
			</details>
			<details className="w-full border rounded-lg">
				<summary className="px-4 py-6 focus:outline-none focus-visible:ri font-semibold">هل يمكنني تغيير تفاصيل العقار بعد نشره على الموقع؟</summary>
				<br />
				<p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">نعم، يمكنك تعديل تفاصيل العقار في أي وقت من خلال حسابك على الموقع. يجب أن تكون المعلومات المحدثة دقيقة لضمان تجربة تصفح سلسة للمستخدمين الآخرين</p>
			</details>
			<details className="w-full border rounded-lg">
				<summary className="px-4 py-6 focus:outline-none focus-visible:ri font-semibold">هل يوجد رسوم تسجيل على الموقع؟</summary>
				<br />
				<p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">لا، الموقع لا يفرض أي رسوم على المستأجرين أو الملاك. إنه منصة مجانية للبحث عن العقارات والتواصل مع ملاك العقارات. </p>
			</details>
		</div>
	</div>
</section>
  )
}

export default FAQ
