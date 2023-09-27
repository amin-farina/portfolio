import FormContact from "./forms";
import TextContact from "./text-contact";

export default function Contact() {
    return (
        <div className='w-100 '>
            <div className="mx-auto container">
                <div className="flex w-100 min-h-[80vh]">
                    <div className="flex-col w-1/2">
                        <div className='justify-center flex items-center h-[80vh]'>
                            <TextContact />
                        </div>
                    </div>
                    <div className="flex-col w-1/2">
                        <div className='justify-center flex items-center h-[80vh]'>
                            <FormContact />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
