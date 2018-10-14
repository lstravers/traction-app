class LocalizeController < ApplicationController
    skip_before_action :set_locale

    def to_es
        I18n.locale = 'es'
        redirect_to "#{request.env['HTTP_REFERER'].sub('en', 'es')}"
    end

    def to_en
        I18n.locale = 'en'
        redirect_to "#{request.env['HTTP_REFERER'].sub('es', 'en')}"
    end
end
