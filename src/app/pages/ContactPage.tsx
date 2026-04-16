import { Phone, MapPin, Clock, Send } from 'lucide-react';

export function ContactPage() {
  return (
    <>
      {/* Page Header */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 pt-32 pb-16 text-white text-center">
        <div className="container mx-auto px-4">
          <div className="inline-block bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full mb-4 text-sm">
            Get In Touch
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-blue-200 max-w-2xl mx-auto">
            Ready to protect your property? We're here to help — no obligation, no contracts.
          </p>
        </div>
      </div>

      {/* Contact Section */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Info */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>

              <div className="space-y-6 mb-8">
                <a
                  href="tel:435-628-4581"
                  className="flex items-start gap-4 p-4 bg-white rounded-xl border-2 border-gray-100 hover:border-blue-300 transition-colors group"
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600 transition-colors">
                    <Phone className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-600 mb-1">Call Us</div>
                    <div className="text-lg font-bold text-gray-900">435-628-4581</div>
                    <div className="text-sm text-gray-500">Tap to call directly</div>
                  </div>
                </a>

                <div className="flex items-start gap-4 p-4 bg-white rounded-xl border-2 border-gray-100">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-600 mb-1">Location</div>
                    <div className="text-lg font-bold text-gray-900">St. George, Utah</div>
                    <div className="text-sm text-gray-500">Serving Southern Utah</div>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-white rounded-xl border-2 border-gray-100">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-600 mb-1">Business Hours</div>
                    <div className="text-lg font-bold text-gray-900">Mon - Fri: 7AM - 6PM</div>
                    <div className="text-sm text-gray-600">Sat: 8AM - 4PM</div>
                  </div>
                </div>
              </div>

              <div className="bg-blue-500 text-white p-6 rounded-2xl">
                <h4 className="text-xl font-bold mb-2">Same-Day Service Available</h4>
                <p className="text-red-100">
                  Need urgent pest control? Call us now for same-day service availability in the St. George area.
                </p>
              </div>
            </div>

            {/* Contact Form - Zoho */}
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Request a Free Quote</h3>
              <form
                id="webform7371341000000737942"
                action="https://crm.zoho.com/crm/WebToLeadForm"
                name="WebToLeads7371341000000737942"
                method="POST"
                onSubmit="javascript:document.charset='UTF-8'; return checkMandatory7371341000000737942()"
                acceptCharset="UTF-8"
              >
                <input type="text" style={{ display: 'none' }} name="xnQsjsdp" value="b8d40eefa3e4794a3b37df95243d73a5d7e74a283f80b7f033f96bbcf953d2ae" />
                <input type="hidden" name="zc_gad" id="zc_gad" value="" />
                <input type="text" style={{ display: 'none' }} name="xmIwtLD" value="a7bfbb1eb2e9bf9ea37b4572e343c25269b62e1d05b48024035ae6bda57a0ae2794f5bf8c1dbe4594886c064ec9544e4" />
                <input type="text" style={{ display: 'none' }} name="actionType" value="TGVhZHM=" />
                <input type="text" style={{ display: 'none' }} name="aG9uZXlwb3Q" value="" />

                <div className="space-y-4">
                  <div>
                    <label htmlFor="First_Name" className="block text-sm font-medium text-gray-700 mb-2">
                      First Name <span style={{ color: 'red' }}>*</span>
                    </label>
                    <input
                      type="text"
                      id="First_Name"
                      aria-required="true"
                      aria-label="First Name"
                      name="First Name"
                      maxLength={40}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                      placeholder="John"
                    />
                  </div>

                  <div>
                    <label htmlFor="Last_Name" className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name <span style={{ color: 'red' }}>*</span>
                    </label>
                    <input
                      type="text"
                      id="Last_Name"
                      aria-required="true"
                      aria-label="Last Name"
                      name="Last Name"
                      maxLength={80}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                      placeholder="Smith"
                    />
                  </div>

                  <div>
                    <label htmlFor="Email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="text"
                      ftype="email"
                      autocomplete="false"
                      id="Email"
                      aria-required="false"
                      aria-label="Email"
                      name="Email"
                      maxLength={100}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="Phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone <span style={{ color: 'red' }}>*</span>
                    </label>
                    <input
                      type="text"
                      id="Phone"
                      aria-required="true"
                      aria-label="Phone"
                      name="Phone"
                      maxLength={30}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                      placeholder="(435) 555-0123"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Service Needed
                    </label>
                    <input type="hidden" name="Designation" value="" />
                    <div className="space-y-2">
                      {['General Pest Control', 'Termite Prevention', 'Dust Fumigation', 'Grub Control', 'Fungus Control'].map((service) => (
                        <label key={service} className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                          <input
                            type="checkbox"
                            name="Designation"
                            value={service}
                            className="w-5 h-5 text-blue-600 rounded focus:ring-blue-500"
                          />
                          <span className="text-gray-700">{service}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <button
                    type="submit"
                    id="formsubmit"
                    className="w-full flex items-center justify-center gap-2 bg-red-500 text-white px-6 py-4 rounded-lg hover:bg-red-600 transition-colors font-medium text-lg"
                  >
                    <Send className="w-5 h-5" />
                    Submit
                  </button>
                </div>
              </form>
              <script
                dangerouslySetInnerHTML={{
                  __html: `
                    function checkMandatory7371341000000737942() {
                      var form = document.forms['WebToLeads7371341000000737942'];
                      var mndFileds = new Array('First Name', 'Last Name', 'Phone');
                      var fldLangVal = new Array('First Name', 'Last Name', 'Phone');
                      for (var i = 0; i < mndFileds.length; i++) {
                        var fieldObj = form[mndFileds[i]];
                        if (fieldObj) {
                          if (((fieldObj.value).replace(/^\s+|\s+$/g, '')).length == 0) {
                            alert(fldLangVal[i] + ' cannot be empty.');
                            fieldObj.focus();
                            return false;
                          }
                        }
                      }
                      var checkedServices = [];
                      var checkboxes = form.querySelectorAll('input[name="Designation"]:checked');
                      for (var j = 0; j < checkboxes.length; j++) {
                        checkedServices.push(checkboxes[j].value);
                      }
                      var hiddenInput = form.querySelector('input[name="Designation"]');
                      if (hiddenInput) {
                        hiddenInput.value = checkedServices.join(', ');
                      }
                      document.getElementById('formsubmit').disabled = true;
                      return true;
                    }
                  `,
                }}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
