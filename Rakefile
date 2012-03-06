ssh_user = "sarahpdx@sarahpdx.com" # for rsync deployment
remote_root = "sarahpdx.com/" # for rsync deployment
bucket = "sarah.pdx"

task :deploy do
  system("rsync --exclude-from=rsync.exclude -rcv . #{ssh_user}:#{remote_root}")
end

task :fake do
  system("rsync --exclude-from=rsync.exclude -rcvn . #{ssh_user}:#{remote_root}")
end

task :fakepull do
  system("rsync --exclude-from=rsync.exclude -rcvn #{ssh_user}:#{remote_root} .")
end

task :pull do
  system("rsync --exclude-from=rsync.exclude -rcv #{ssh_user}:#{remote_root} .")
end

task :s3, :dir do |t, args|
  # puts args
  system("s3cmd put --acl-public --recursive #{args.dir} s3://#{bucket}")
end

task :s3mb, :bucket do |t, args|
  system("s3cmd mb s3://#{args.bucket}")
end