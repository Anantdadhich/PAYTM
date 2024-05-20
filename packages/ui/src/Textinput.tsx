
type Inputprops={
    placeholder:string,
    onChange:(value:string)=>void,
    label:string
}

export const Textinput = ({placeholder,onChange,label}:Inputprops) => {
  return (
    <div className="pt-2">
        <label className="block mb-2 text-sm font-medium text-gray-900">{label}</label>
        <input onChange={(e) => onChange(e.target.value)} type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder={placeholder} />
    </div>
  )
}

export default Textinput