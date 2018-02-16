namespace :db do
  desc 'heroku pg:reset, migrate, seed'
  task hdcms: :environment do
    exec('heroku pg:reset --app swt-sp4 --confirm swt-sp4
      heroku run rake db:migrate --app swt-sp4
      heroku run rake db:seed --app swt-sp4')	
  end
end
