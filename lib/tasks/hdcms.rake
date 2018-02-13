namespace :db do
  desc 'heroku pg:reset, migrate, seed'
  task hdcms: :environment do
    exec('heroku pg:reset --app smithpiano4 --confirm smithpiano4
      heroku run rake db:migrate --app smithpiano4
      heroku run rake db:seed --app smithpiano4')	
  end
end
