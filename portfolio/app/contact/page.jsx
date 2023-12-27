import FormContact from "./forms";
import TextContact from "./text-contact";

export const metadata = {
    title: 'Contact',
};

export default function Contact() {
    return (
        <div className='w-100 '>
            <div className="mx-auto container">
                <div className="flex w-100 min-h-[80vh] max-sm:flex-wrap">
                    <div className="flex-col w-1/2 max-sm:w-full">
                        <div className='justify-center flex items-center min-sm:h-[80vh] max-sm:mb-5 max-sm:px-5'>
                            <TextContact />
                        </div>
                    </div>
                    <div className="flex-col w-1/2 max-sm:w-full">
                        <div className='justify-center flex items-center min-sm:h-[80vh]'>
                            <FormContact />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
